// setup shortcut
App.view.items_Shortcuts = Ext.Array.push(App.view.items_Shortcuts || [],[
{
    text:
'<img height="64" width="128" src="' + App.backendURL +
'/extjs-grid-grouping/favicon.ico"/>' +
'<br/>miamicoder.com<br/>' +
'Grid Grouping Tutorial<br/>'
   ,height: 110
   ,tooltip: 'miamicoder.com "Ext JS Grid Grouping Tutorial"'
   ,handler: function open_GridGrouping(btn){
        if(GridGrouping.getApplication){
            var v = Ext.getCmp('GridGrouping.view')
            v && v.show()// multiple launch but one app
        } else {
            App.create('GridGrouping.app.Application', btn)
        }
    }
}
])

// tune this ExtJS application
Ext.Loader.setPath('GridGrouping', App.backendURL + '/extjs-grid-grouping/app');

// define quick loading config for application
Ext.ns('GridGrouping.app');
App.cfg['GridGrouping.app.Application'] = ({
    extend: 'Ext.app.Application',
    name: 'GridGrouping',
    appFolder: Ext.Loader.getPath('GridGrouping'),
    models: ['ModelCar'],
    stores: ['ModelCars'],
    views: ['Viewport'],
    autoCreateViewport: true,    
    launch: function () {
    }
});