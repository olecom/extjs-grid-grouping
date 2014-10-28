Ext.application({
    name: 'App',
    models: ['ModelCar'],
    stores: ['ModelCars'],
    views: ['Viewport'],
    autoCreateViewport: true,    
    launch: function () {
    }
});