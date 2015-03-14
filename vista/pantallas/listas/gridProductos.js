


Ext.onReady(function() {

var listadoCamposFormulario=Ext.create('Ext.grid.Panel', {
    alias: 'widget.mygridpanel',

    requires: [
        'MyApp.view.MyGridPanelViewModel',
        'Ext.grid.column.Number',
        'Ext.button.Button',
        'Ext.toolbar.Paging'
    ],

    viewModel: {
        type: 'mygridpanel'
    },
    height: 370,
    width: 950,
   
 
    columns: [
        {
            xtype: 'gridcolumn',
            width: 96,
            dataIndex: 'string',
            text: 'Foto'
        },
        {
            xtype: 'gridcolumn',
            width: 226,
            text: 'Nombre'
        },
        {
            xtype: 'gridcolumn',
            width: 195,
            text: 'Tipo de Producto'
        },
        {
            xtype: 'gridcolumn',
            width: 174,
            text: 'Tipo de Oferta'
        },
        {
            xtype: 'numbercolumn',
            width: 173,
            text: 'Cantidad Disponible'
        }
    ],
   
    initComponent: function() {
        
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Adicionar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Excluir',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Contatos',
            displayInfo: true,
            displayMsg: 'Mostrando Contatos {0} - {1} de {2}',
            emptyMsg: "Nenhum contato encontrado."
        }];
    }

});


        var main = new Ext.Panel({
            renderTo    :   "contenido",
            layout      :   "card",
            floatting   :   true,
            hidden      :true,
            title       :   "<h1>Productos</h1>",
            border      :   true,
            modal       :   false,
            frame       :   true,
            x           :   30,
            y           :   20,
            height      :   370,
            width       :   950,
           
            items       :   listadoCamposFormulario
                    
            });
        //main.show();
/*Fin componenete principal*/   
        

});