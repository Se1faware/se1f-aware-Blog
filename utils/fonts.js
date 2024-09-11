import localFont from 'next/font/local'

export const lxgw = localFont({
  src: [
    {
      path: '../public/static/fonts/LXGWWenKai-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/LXGWWenKaiMono-Regular.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/static/fonts/LXGWWenKai-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/LXGWWenKaiMono-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})
