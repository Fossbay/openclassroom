import Router from 'next/router';

export default function linkToUsingRouter(event: any, url: string) {
  event.preventDefault();
  Router.push(url);
}
