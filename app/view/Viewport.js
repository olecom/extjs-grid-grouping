Ext.define('GridGrouping.view.Viewport', {
    extend: App.view.Window,
    id: 'GridGrouping.view',
    title: 'Ext JS Grid Grouping Tutorial by <i>miamicoder.com</i>',
    closeAction: 'hide',
    width: 650,
    height: 475,
    //requires: ['Ext.grid.Panel'],
    //style: 'padding:25px',
    //layout: 'vbox',
    items: [
       {
           xtype: 'gridpanel',
           //width: 650,
           //height: 475,
           //title: 'Ext JS Grid Grouping',
           store: 'ModelCars',
           columns: [
                {
                    text: 'Id',
                    hidden: true,  
                    dataIndex: 'id'
                },
                {
                    text: 'Name',
                    sortable: true,
                    dataIndex: 'name',
                    flex: 3                      
                },
                {
                    text: 'Vendor',
                    sortable: true,
                    dataIndex: 'vendor',
                    flex:2
                },
                {
                    text: 'Category',
                    sortable: true,
                    dataIndex: 'category',
                    flex: 2
                }
           ],
           features: [{
               ftype: 'grouping',
               // You can customize the group's header.
               groupHeaderTpl: '{name} ({children.length})',
               enableNoGroups:true
           }]
       }
    ]
});