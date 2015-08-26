module.exports = [
    {
        id: 'home',
        url: '/',
        controller: '@api.controllers.Home',
        action: 'index'
    },
    {
        id: 'system-configuration',
        url: '/system/configuration',
        controller: '@api.controllers.System',
        action: 'configuration'
    }
];

