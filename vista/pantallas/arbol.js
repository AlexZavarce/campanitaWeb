    Ext.require([
                'Ext.tree.*',
                'Ext.data.*',
                'Ext.tip.*'
             ]);

             Ext.onReady(function() {
                Ext.QuickTips.init();
                
                var store = Ext.create('Ext.data.TreeStore', {
                    proxy: {
                        type: 'ajax',
                        method: 'GET',
                        url: '/menuadmin/generarmenu?tipo=1'
                    },
                    root: {
                        text: 'Propietario',
                        id: 'root_node',
                        expanded: true
                    },
                    folderSort: false,
                    sorters: [{
                        property: 'id',
                        direction: 'ASC'
                    }]
                });

                var tree = Ext.create('Ext.tree.Panel', {
     //               store: store,
                    renderTo: 'arbol',
                    layout		:	'fit',
                    border		:   true,
        			modal       :   true,
        			frame 		:   true,
                    x			:	30,
        		    y			:	60,
            	    height		: 	370,
                    width: 230,
                    floatting	: 	true,
                    //region: 'west',
                    //split: true,
                    border: false,
                    header: true,
                    //collapseMode: 'mini',
                    
                    title: 'Campanita-Menu',
                    useArrows: true,
                             listeners: {
                             itemclick: function(view, node) {
                             if(node.isLeaf()) {
                              /*Ext.Msg.alert('Datos del Nodo',
                                 'Nodo id: ' + node.get('id') + '<br/>' +
                                 'Nodo Texto: ' + node.get('text') + '<br/>' +
                                 'Padre Nodo id: ' + node.get('parentId') + '<br/>' +
                                 'Es una hoja?: ' + node.get('leaf') + '<br/>' +
                                 'Nro de Hijos: ' + node.childNodes.length
                             );*/
                             } else if(node.isExpanded()) {
                                node.collapse();
                               } else {
                                  node.expand();
                                 }
                            }
                        
                      }
                });
             });
