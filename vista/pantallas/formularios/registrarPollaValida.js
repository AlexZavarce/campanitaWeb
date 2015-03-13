var encontrado = 0;
var ventana=null;
var ventanaResultados=null;

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
//-------------------------LISTA DEL PRINCIPIO----------------------------------

    Ext.define('gridPollaJugada', {
            extend: 'Ext.data.Model',
            fields: [
                {name:'pollas.id', type:'int'},
                {name:'pollas.hipodromos.nombre', type:'string'},
                {name:'pollas.fecha_jugada.date', type:'date'},
                {name:'pollas.estatus', type:'int'},
                
            ] 
    });
        

    var store = Ext.create('Ext.data.Store', {
        model: 'gridPollaJugada',
        autoLoad: true,
        pageSize: 12,
        autoLoad: {start: 0, limit: 12},
        
        proxy: {
           
            type: 'ajax',
            url: 'control/mostrarGridPollaJugada.php', // archivo que contiene las operaciones de postgres

            reader: { 
                type: 'json',
                root: 'datos',
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
    store: store,
    id: 'listadoCamposFormulario',
    layout:'fit',
    requires: ['Ext.toolbar.Paging'],
        listeners : {
                itemdblclick: function(dv, record, item, index, e) {
                    record = listadoCamposFormulario.getStore().getAt(index);
                    Ext.Msg.alert('Banco','Title: '+record.get('nombre')); //alert temporal
                }, 
                itemclick: function(dv, record, item, index, e) {
                    Ext.getCmp('verPollaJugada').setDisabled(false);
                    Ext.getCmp('eliminarPollaJugada').setDisabled(false);
                    Ext.getCmp('resultadoPollaJugada').setDisabled(false);
                   
                   
                }
            },
    columns:[
               {
                    id:'id',
                    header: 'id', 
                    width: 0, 
                    sortable: true,
                    hidden: true,
                    flex:1,
                    dataIndex: 'pollas.id'
               },
               {
                    text: 'Hipodromo',
                    width: 260,
                    sortable: true,
                    hideable: false,
                    flex:1,
                    dataIndex: 'pollas.hipodromos.nombre'
     
                },
                {
                    text: 'Fecha de Jugada',
                    width: 260,
                    dataIndex: 'pollas.fecha_jugada.date',
                    hidden: false,
                    flex:1,
                    renderer: Ext.util.Format.dateRenderer('d-m-Y'),//Esto da el formato a la fedcha para que se vea como quiero
                    sorteable: true
                }
            ],
    dockedItems: [
           {
            xtype: 'toolbar',
            items: [{
                iconCls: 'myimagebuttonnuevo',
              
                height:30,
                width:100,
                id: 'resultadoPollaJugada',
                text: 'Resultado',
                disabled: true,
                handler: function (){
                    mostrarFormulario()
                }
            },{
                iconCls: 'icon-save',
               
                height:30,
                width:100,
                text: 'Ver',
                id: 'verPollaJugada',
                disabled: true,
               
                handler: function (){
                    verFormulario()
                }
            },{
                iconCls: 'myimagebuttonborrar',
                height:30,
                width:100,
                disabled: true,
                id: 'eliminarPollaJugada',
                text: 'Eliminar',
                action: 'delete'
            }]
        },
         {
            xtype: 'pagingtoolbar',
            dock:'bottom',
            pageSize: 3,
            store: store,
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
        

//_-----------------------------------------------------------------------------

//-----------------------Panel para Registrar Validas---------------------------

    var panel = Ext.create('Ext.form.Panel', {
        //renderTo: 'fi-form',
        height: 225,
        width: 445,
        layout: 'absolute',
    

        defaults: {
            
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

        items: [{
            xtype: 'fieldset',
            y:50,
            x:10,
            height: 50,
            width: 420,
            layout: 'absolute',
            title: '',
            items: [
                {
                    xtype: 'combobox',
                    x: 5,
                    y: 0,
                    width: 300,
                    emptyText:' Seleccionar',
                    fieldLabel: 'Valida a Registrar:'
                }
            ]
        },
        {
            xtype: 'fieldset',
            x: 10,
            y: 110,
            height: 100,
            width: 420,
            layout: 'absolute',
            title: 'Resultados',
            items: [
                {
                    xtype: 'textfield',
                    x: 5,
                    y: 18,
                    width: 165,
                    emptyText:' Primero',
                    fieldLabel: 'Ganadores'
                },
                {
                    xtype: 'textfield',
                    x: 215,
                    y: 18,
                    width: 65,
                    emptyText:' Segundo',
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 325,
                    y: 18,
                    width: 65,
                    emptyText:' Tercero',
                    fieldLabel: ''
                }
            ]
            },
            {
            xtype: 'toolbar',
            items: [{
                iconCls : 'myimagebuttonguardar',
                itemId: 'aceptar',
                height:30,
                width:100,
                
                text: 'Guardar',
                handler: function (){
                    if(encontrado=0){
                        registrarBanco()                                
                    }
                    else{
                        actualizarBanco()
                    }
                }
            },
            {
                iconCls : 'myimagebuttonlimpiar',
                height:30,
                width:100,
                itemId: 'limpiar',
                text: 'Limpiar',
                action: 'editar',
                handler: function (){
                    
                }
            },
            {
                iconCls : 'myimagebuttonsalir',
                height:30,
                width:100,
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
            height: 260,
            width: 455,
            items       :   [panel]
        });

    });

//------------------------------------------------------------------------------

//-----------------------Panel para Mostrar Resultados--------------------------
  
    var panel2 = Ext.create('Ext.form.Panel', {
        height: 370,
        width: 950,
        frame: false,
        collapsible: false,
        collapsed: false,
        closable: false,
        //title: 'ADICIONAR DOCUMENTO',
        //bodyPadding: '10 10 0',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

    items: [
    {
            xtype: 'toolbar',
            items: [{
                 iconCls : 'myimagebuttonguardar',
                itemId: 'aceptar',
                height:30,
                width:100,
              
                text: 'Guardar',
                action: 'add',
                handler: function (){
                  
                }
            },
            {
                iconCls : 'myimagebuttonlimpiar',
                height:30,
                width:100,
                itemId: 'limpiar',
                text: 'Limpiar',
                action: 'editar',
                handler: function (){
                    
                }
            },
            {
                iconCls : 'myimagebuttonsalir',
               
                height:30,
                width:100,
               
                text: 'Salir',
                handler: function (){
                   cerrarVer()
                }
            }]
        },
        {
            xtype: 'fieldset',
            x: 10,
            y: 10,
            height: 60,
            width: 340,
            layout: 'absolute',
            title: '',
            items: [
                {
                    xtype: 'textfield',
                    x: 20,
                    y: 10,
                    width: 280,
                    fieldLabel: 'Hipodromo',
                    readOnly: true

                },
                {
                    xtype: 'textfield',
                    x: 340,
                    y: 10,
                    width: 280,
                    
                    fieldLabel: 'Fecha de Jugada',
                    readOnly: true

                }
            ]
        },
        {
            xtype: 'fieldset',
            x: 10,
            y: 10,
            height: 180,
            
            layout: 'absolute',
            title: 'Polla',
            items: [
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 70,
                    id:'txtValida2Puesto2',
                    width: 90,
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 70,
                    width: 90,
                    id:'txtValida3Puesto2',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 110,
                    width: 90,
                    id:'txtValida3Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 70,
                    width: 90,
                    id:'txtValida4Puesto2',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 110,
                    width: 90,
                    id:'txtValida4Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 70,
                    width: 90,
                    id:'txtValida5Puesto2',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 30,
                    width: 90,
                    id:'txtValida5Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 110,
                    width: 90,
                    id:'txtValida6Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 70,
                    width: 90,
                    id:'txtValida6Puesto2',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 30,
                    width: 90,
                    id:'txtValida6Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 30,
                    width: 90,
                    id:'txtValida7Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 110,
                    width: 90,
                    id:'txtValida7Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 70,
                    width: 90,
                    id:'txtValida7Puesto2',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 110,
                    width: 90,
                    id:'txtValida2Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 110,
                    width: 90,
                    id:'txtValida5Puesto3',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 30,
                    width: 90,
                    id:'txtValida4Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 30,
                    width: 90,
                    id:'txtValida3Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 30,
                    width: 90,
                    id:'txtValid2Puesto1',
                    readOnly: true,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 70,
                    width: 190,
                    id:'txtValida1Puesto1',
                    readOnly: true,
                    fieldLabel: 'Segundo'
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 30,
                    width: 190,
                    
                    id:'txtValida1Puesto2',
                    name: 'primero',
                    readOnly: true,
                    fieldLabel: 'Primero'
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 110,
                    width: 190,
                    id:'txtValida1Puesto3',
                    readOnly: true,
                    fieldLabel: 'Tercero'
                },
                {
                    xtype: 'label',
                    x: 2,
                    y: -1,
                    text: 'Lugar/Valida '
                },
                {
                    xtype: 'label',
                    x: 130,
                    y: -1,
                    text: 'Primera '
                },
                {
                    xtype: 'label',
                    x: 230,
                    y: -1,
                    text: 'Segunda '
                },
                {
                    xtype: 'label',
                    x: 340,
                    y: -1,
                    text: 'Tercera'
                },
                {
                    xtype: 'label',
                    x: 450,
                    y: 0,
                    text: 'Cuarta'
                },
                {
                    xtype: 'label',
                    x: 560,
                    y: 0,
                    text: 'Quinta'
                },
                {
                    xtype: 'label',
                    x: 670,
                    y: 0,
                    text: 'Sexta'
                },
                {
                    xtype: 'label',
                    x: 770,
                    y: -2,
                    text: 'Septima'
                }
            ]
        },
       
     ]
    });
    
    var main = Ext.define('App.miVentanaResultado', {
            extend: 'Ext.window.Window',
            
            renderTo    :   "contenido",
            title: 'Nuevo Banco',
            closeAction :'hide',
            closable    : false,
            resizable   : false,
            floatting   :   true,
            //hidden        :   true,
            x			:	30,
	    y			:	20,
	    border		:   true,
            modal       :   false,
            frame 		:   true,
            height		:	370,
            width		:	950,
            items       :   [panel2]
        });
    
//------------------------------------------------------------------------------
    


//---------------------------------Funciones------------------------------------
    
    
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
        
        ventana.show();
    }
    
    //Funcion que muestra el formulario y permite Actualizar
    function verFormulario(){
        //Trae la grid para poder actualizar al editar
        /*
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection()) {
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
       */

        encontrado=1;
        if(ventanaResultados==null)  
            ventanaResultados = Ext.create ('App.miVentanaResultado');

        // Precarga el nombre e id seleccionados
        //Ext.getCmp('nombreBanco').setValue(row.get('nombre'));
        //Ext.getCmp('idBanco').setValue(row.get('id'));


        ventanaResultados.show();
        
        
    }

    //Funcion que limpia los campos
    function limpiar(){

        // Ext.getCmp('nombreBanco').setValue('');
        // Ext.getCmp('idBanco').setValue('');    
    }

    //Funcion que cierra la ventana emergente
    function cerrar(){
        ventana.close();
        Ext.getCmp('verPollaJugada').setDisabled(true);
        Ext.getCmp('eliminarPollaJugada').setDisabled(true);
        Ext.getCmp('resultadoPollaJugada').setDisabled(true);
    }
    
    function cerrarVer(){
        ventanaResultados.close();
        Ext.getCmp('verPollaJugada').setDisabled(true);
        Ext.getCmp('eliminarPollaJugada').setDisabled(true);
        Ext.getCmp('resultadoPollaJugada').setDisabled(true);
                   
    }