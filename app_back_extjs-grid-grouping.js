
module.exports = extjs_grid_grouping

function extjs_grid_grouping(api, cfg){
var name = 'extjs-grid-grouping'

    api.app.use('/' + name + '/', api.connect['static'](__dirname + '/'))

    return { css:[ ], js:[ '/' + name + '/app' ], cfg: cfg}
}
