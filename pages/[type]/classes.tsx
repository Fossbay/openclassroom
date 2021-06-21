import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";
import Head from "next/head";
import Router from "next/router";

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const session: Session = props.session;

  if (!session.user) Router.push('/login');

  return (
    <>
      
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session || !session.user)
    return {
      redirect: {
        destination: '/login',
        statusCode: 403,
      },
      props: {},
    };

  return {
    props: {
      session
    }
  };
};
