

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ipsam dolorem placeat, recusandae obcaecati fuga non libero, incidunt quaerat minima similique nihil ratione facere maxime dignissimos provident id temporibus officia?',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ipsam dolorem placeat, recusandae obcaecati fuga non libero, incidunt quaerat minima similique nihil ratione facere maxime dignissimos provident id temporibus officia?',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ipsam dolorem placeat, recusandae obcaecati fuga non libero, incidunt quaerat minima similique nihil ratione facere maxime dignissimos provident id temporibus officia?',
            picture: null,
        }
    ],
})