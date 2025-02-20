import barba from '@barba/core';

// 仅在客户端运行
if (typeof window !== 'undefined') {
    barba.init({
        transitions: [
            {
                name: 'fade',
                from: { namespace: 'home' },
                to: { namespace: 'next' },
                enter() {
                    // 进入页面的逻辑
                },
                leave() {
                    // 离开页面的逻辑
                },
            },
        ],
    });
}