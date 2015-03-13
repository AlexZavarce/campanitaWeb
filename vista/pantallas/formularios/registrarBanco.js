var encontrado = 0;
var ventana=null;
Ext.onReady(function() {

//  Class which shows invisible file input field.
    /*if (window.location.href.indexOf('debug') !== -1) {
        Ext.getBody().addCls('x-debug');
    }*/

    var msg = function(title, msg) {
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };
//--------------------------------------------------------------------

    Ext.define('gridBanco', {
            extend: 'Ext.data.Model',
            fields: [
                {name:'id', type:'int'},
                {name:'nombre', type:'string'},
                {name:'estatus', type:'int'},
            ] 
    });
        

    var storeBanco = Ext.create('Ext.data.Store', {
        model: 'gridBanco',
        autoLoad: true,
        pageSize: 12,
        autoLoad: {start: 0, limit: 12},
        
        proxy: {
           
            type: 'ajax',
            url: 'control/mostrarGridBanco.php', // archivo que contiene las operaciones de postgres

            reader: { 
                type: 'json',
                root: 'bancos',
                totalProperty: 'total',

            }
        }
    });

//storeBanco.load({params:{start:0, limit:12}});
//storeBanco.filter("estatus",1);
var filtersCfg = {
        ftype: 'filters',
        local: true,
        filters: [{
                type: 'string',
                dataIndex: 'nombre'
            }]
    };

    var listadoCamposFormulario=Ext.create('Ext.grid.Panel', {
    store: storeBanco,
    id: 'listadoCamposFormulario',
    layout:'fit',
    requires: ['Ext.toolbar.Paging'],
        listeners : {
                itemdblclick: function(dv, record, item, index, e) {
                    record = listadoCamposFormulario.getStore().getAt(index);
                    Ext.Msg.alert('Banco','Title: '+record.get('nombre')); //alert temporal
                }, 
                itemclick: function(dv, record, item, index, e) {
                    Ext.getCmp('editarBanco').setDisabled(false);
                    Ext.getCmp('eliminarBanco').setDisabled(false);
                   
                }
            },
    columns: [
               {
                    id:'id',
                    header: 'id', 
                    width: 0, 
                    sortable: true,
                    hidden: true,
                    flex:1,
                    dataIndex: 'id'
               },
               {
                    text: 'Nombre',
                    width: 260,
                    sortable: true,
                    hideable: false,
                    flex:1,
                    dataIndex: 'nombre'
     
                },
                {
                    text: 'Estatus',
                    width: 260,
                    dataIndex: 'estatus',
                    hidden: false,
                    flex:1,
                    sorteable: true
                }
            ],
    dockedItems: [
           {
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                height:30,
                width:100,
                id: 'nuevoBanco',
                text: 'Nuevo',
                action: 'add',
                handler: function (){
                                mostrarFormulario()
                }
            },{
                iconCls: 'icon-save',
                itemId: 'editar',
                height:30,
                width:100,
                text: 'Editar',
                id: 'editarBanco',
                disabled: true,
                action: 'editar',
                handler: function (){
                    editarFormulario()
                }
            },{
                iconCls: 'icon-delete',
                height:30,
                width:100,
                disabled: true,
                 id: 'eliminarBanco',
                text: 'Eliminar',
                action: 'delete'
            }]
        },
         {
            xtype: 'pagingtoolbar',
            dock:'bottom',
            pageSize: 3,
            store: storeBanco,
            displayInfo: true,
            displayMsg: 'Mostrando Contatos {0} - {1} de {2}',
            emptyMsg: "No se han encontrado Registros."
        }
    ],


});

            new Ext.Panel({
                renderTo    :   "contenido",
                layout      :   "card",
                floatting   :   true,
                title       :   "Banco",
                closeAction :'hide',
                closable    : false,
                resizable   : false,
                floatting   :   true,
                //hidden        :   true,
              
                border      :   true,
                modal       :   false,
                frame       :   true,
                x           :   30,
                y           :   20,
                height      :   375,
                width       :   550,
               
                items       :   listadoCamposFormulario
                    
            });
        //main.show();
/*Fin componenete principal*/   
        

//_-------------------------------------------------------------------


    var panel = Ext.create('Ext.form.Panel', {
        //renderTo: 'fi-form',
        height: 227,
        width: 541,
        layout: 'absolute',
    

        defaults: {
            
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

        items: [{
                xtype: 'fieldset',
                x: 10,
                y: 50,
                height: 90,
                width: 510,
                layout: 'absolute',
                title: 'Datos Básicos',
                items: [{
                    xtype: 'textfield',
                    x: 5,
                    y: 20,
                    hidden:true,
                    width: 400,
                    id:'idBanco',
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 5,
                    y: 0,
                    width: 400,
                    id:'nombreBanco',
                    fieldLabel: 'Nombre:'
                }]
            },
           {
            xtype: 'toolbar',
            items: [{
                //iconCls: 'icon-save',
                itemId: 'aceptar',
                height:30,
                width:100,
                id: 'guardarBanco',
                text: 'Guardar',
                action: 'add',
                handler: function (){
                    if(encontrado=0){
                        registrarBanco()                                
                    }
                    else{
                        actualizarBanco()
                    }
                }
            },{
                //iconCls: 'icon-save',
                height:30,
                width:100,
                itemId: 'limpiar',
                text: 'Limpiar',
                id: 'limpiarBanco',
                //disabled: true,
                action: 'editar',
                handler: function (){
                     limpiar()
                }
            },{
                //iconCls: 'icon-delete',
                //disabled: true,
                height:30,
                width:100,
                id: 'salirBanco',
                text: 'Salir',
                handler: function (){
                    cerrar()    
                }
            }]
        }]
    });
    
        var main = Ext.define('App.miVentanaBanco', {
            extend: 'Ext.window.Window',
            id: 'miVentanaBanco',
            renderTo    :   "contenido",
            title: 'Nuevo Banco',
            closeAction :'hide',
            closable    : false,
            resizable   : false,
            floatting   :   true,
            //hidden        :   true,
            x           :   200,
            y           :   50,
            border      :   true,
            modal       :   false,
            frame       :   true,
            height: 227,
            width: 541,
            items       :   [panel]
        });

    });
//********************************FUNCIONES**********************************************************
    
    
    //Funcion para registrar los datos de un banco
    function registrarBanco() {
        Ext.Ajax.request({
            url: 'control/registrarBanco.php',
            method: 'GET',
            params: {
                ajax: 'true',
                nombre: Ext.getCmp('nombreBanco').getValue().replace(/ +/g,'-'),
                estatus: 1,
            },
            //Retorno exitoso de la pagina servidora a traves del formato JSON
            success: function( resultado, request ) {
            datos = Ext.JSON.decode(resultado.responseText);
                if (datos.exito) {
                    Ext.Msg.alert('Atención', datos.msg);
                    Ext.getCmp('listadoCamposFormulario').getStore().load();
                    limpiar();
                    cerrar();
                } else {
                    Ext.Msg.alert('Atención', datos.msg);
                }
            },
            //No hay retorno de la pagina servidora
            failure: function() {
                Ext.Msg.alert("Error", "Servidor no conectado");
            }
        });
    }
    
    //Funcion para actualizar los datos de un banco
    function actualizarBanco() {
        Ext.Ajax.request({
            url: 'control/actualizarBanco.php',
            method: 'GET',
            params: {
                ajax: 'true',
               
                //Se envia el nombre, y se reemplazan los espacios en blanco con - 
                id: Ext.getCmp('idBanco').getValue(),
                nombre: Ext.getCmp('nombreBanco').getValue().replace(/ +/g,'-'),
                
            },
            //Retorno exitoso de la pagina servidora a traves del formato JSON
            success: function( resultado, request ) {
                datos = Ext.JSON.decode(resultado.responseText);
                if (datos.exito) {
                    Ext.Msg.alert('Atención', datos.msg);
                    Ext.getCmp('listadoCamposFormulario').getStore().load();
                    limpiar();
                    cerrar();
                } 
                else {
                    Ext.Msg.alert('Atención', datos.msg);
                }

            },
            //No hay retorno de la pagina servidora
            failure: function() {
                Ext.Msg.alert("Error", "Servidor no conectado");
            }
        });
    }
   
    //Funcion que muestra el formulario y permite Registrar
    function mostrarFormulario(){
        var acum;    
        //variable que permite saber que es un registrar
        encontrado=0;  
        if(ventana==null) 
            ventana = Ext.create ('App.miVentanaBanco')
        limpiar();
        ventana.show();
    }
    
    //Funcion que muestra el formulario y permite Actualizar
    function editarFormulario(){
        //Trae la grid para poder actualizar al editar
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection()) {
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
       

        encontrado=1;
        if(ventana==null)  
            ventana = Ext.create ('App.miVentanaBanco');

        // Precarga el nombre e id seleccionados
        Ext.getCmp('nombreBanco').setValue(row.get('nombre'));
        Ext.getCmp('idBanco').setValue(row.get('id'));


        ventana.show();
        
        }
    }

    //Funcion que limpia los campos
    function limpiar(){

        Ext.getCmp('nombreBanco').setValue('');
        Ext.getCmp('idBanco').setValue('');    
    }

    //Funcion que cierra la ventana emergente
    function cerrar(){
        ventana.close();
        Ext.getCmp('editarBanco').setDisabled(true);
        Ext.getCmp('eliminarBanco').setDisabled(true);
    }