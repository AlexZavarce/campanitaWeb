var encontrado = 0;
var ventana=null;


Ext.onReady(function() {


// --------------------- Modelo y Store para el cargar el combo de los telefonos fijos-------------------------------------------
  Ext.define('CodigoArea', { 
  extend: 'Ext.data.Model',
           fields: [
            {name: 'id', type: 'string'},
            {name: 'codigo', type: 'string'},
            {name: 'estatus', type: 'string'},
           ],
          
});

//Definicion del Data Store 
var codigoAreaStore = Ext.create('Ext.data.Store', {
   
    model: 'CodigoArea',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url : 'control/mostrarComboCodigoArea.php',
            reader: {
                  type: 'json',
                  root: 'codigo_area_fijo'
              }
           }

});
//-------------------------------------------------------------------------------------------------------------------------------

// --------------------- Modelo y Store para el cargar el combo de codigos de los celulares-------------------------------------------
  Ext.define('CodigoOperadora', { 
  extend: 'Ext.data.Model',
           fields: [
            {name: 'id', type: 'string'},
            {name: 'codigo', type: 'string'},
            {name: 'estatus', type: 'string'},
           ],
          
});

//Definicion del Data Store 
var codigoOperadoraStore = Ext.create('Ext.data.Store', {
   
    model: 'CodigoOperadora',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url : 'control/mostrarComboCodigoOperadora.php',
            reader: {
                  type: 'json',
                  root: 'codigo_area_fijo'
              }
           }

});
//--------------------------------------------------------------------------------------------


// --------------------- Modelo y Store para el cargar el combo de los bancos-------------------------------------------
  Ext.define('Bancos', { 
  extend: 'Ext.data.Model',
           fields: [
            {name: 'id', type: 'string'},
            {name: 'nombre', type: 'string'},
            {name: 'estatus', type: 'string'},
           ],
          
});

//Definicion del Data Store 
var comboBancoStore = Ext.create('Ext.data.Store', {
   
    model: 'Bancos',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url : 'control/mostrarComboBanco.php',
            reader: {
                  type: 'json',
                  root: 'bancos'
              }
           }

});
//-----------------------------------------------------------------------------------------------------------

// --------------------- Modelo y Store para el cargar el combo de las preguntas-------------------------------------------
  Ext.define('Pregunta1', { 
  extend: 'Ext.data.Model',
           fields: [
            {name: 'id', type: 'string'},
            {name: 'descripcion', type: 'string'},
            {name: 'estatus', type: 'string'},
           ],
          
});

//Definicion del Data Store 
var comboPregunta1Store = Ext.create('Ext.data.Store', {
   
    model: 'Pregunta1',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url : 'control/mostrarComboPregunta1.php',
            reader: {
                  type: 'json',
                  root: 'preguntas'
              }
           }

});
//-----------------------------------------------------------------------------------------------------------

// --------------------- Modelo y Store para el cargar el combo de las preguntas-------------------------------------------
  Ext.define('Pregunta2', { 
  extend: 'Ext.data.Model',
           fields: [
            {name: 'id', type: 'string'},
            {name: 'descripcion', type: 'string'},
            {name: 'estatus', type: 'string'},
           ],
          
});

//Definicion del Data Store 
var comboPregunta1Store = Ext.create('Ext.data.Store', {
   
    model: 'Pregunta2',
    autoLoad: true,
    proxy: {
            type: 'ajax',
            url : 'control/mostrarComboPregunta2.php',
            reader: {
                  type: 'json',
                  root: 'preguntas',
                  
              }
           }

});
//-----------------------------------------------------------------------------------------------------------





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

    Ext.define('gridUsuario', {
            extend: 'Ext.data.Model',
            fields: [
                {name:'usuarios.id', type:'int'},
                {name:'usuarios.nombre', type:'string'},
                {name:'usuarios.telefono', type:'string'},
                {name:'usuarios.apellido', type:'string'},
                {name:'usuarios.correo', type:'string'},
                {name:'usuarios.login', type:'string'},
                {name:'usuarios.cuentas.bancos.nombre', type:'string'},
                
                {name:'estatus', type:'int'},
            ] 
    });
        

    var storeBanco = Ext.create('Ext.data.Store', {
        model: 'gridUsuario',
        autoLoad: true,
        pageSize: 11,
        autoLoad: {start: 0, limit: 11},
        
        proxy: {
           
            type: 'ajax',
            url: 'control/mostrarGridUsuario.php', // archivo que contiene las operaciones de postgres

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
    store: storeBanco,
    id: 'listadoCamposFormulario',
    layout:'fit',
    requires: ['Ext.toolbar.Paging'],
        listeners : {
                itemdblclick: function(dv, record, item, index, e) {
                    record = listadoCamposFormulario.getStore().getAt(index);
                    Ext.Msg.alert('Usuario','Title: '+record.get('nombre')); //alert temporal
                }, 

                itemclick: function(dv, record, item, index, e) {
                    Ext.getCmp('editarUsuario').setDisabled(false);
                    Ext.getCmp('eliminarUsuario').setDisabled(false);
                   
                }
            },
    columns: [
        {
            xtype: 'gridcolumn',
            id:'idUsuario',
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
            dataIndex: 'usuarios.nombre'

        },
        {
            xtype: 'gridcolumn',
            width: 260,
            sortable: true,
            hideable: false,
            flex:1,
            dataIndex: 'usuarios.apellido',
            text: 'Apellido'
        },
        {
             xtype: 'gridcolumn',
            width: 260,
            sortable: true,
            hideable: false,
            flex:1,
            dataIndex: 'usuarios.telefono',
            text: 'Telefono'
        },
        {
             xtype: 'gridcolumn',
            width: 260,
            sortable: true,
            hideable: false,
            flex:1,
            dataIndex: 'usuarios.correo',
            text: 'Correo'
        },
        {
             xtype: 'gridcolumn',
            width: 260,
            sortable: true,
            hideable: false,
            flex:1,
            dataIndex: 'usuarios.login',
            text: 'Usuario'
        },
        {
            id:'banco',
            header: 'banco', 
            width: 0, 
            sortable: true,
            
            flex:1,
            text:'Banco',
            dataIndex: 'usuarios.cuentas.bancos.nombre'
           // dataIndex:'cuentas.bancos.nombre'
        }
    ],
    dockedItems: [
           {
            xtype: 'toolbar',
            items: [{
                iconCls: 'myimagebuttonnuevo',
                itemId: 'add',
                height:30,
                width:100,
                id: 'nuevoUsuario',
                text: 'Nuevo',
                action: 'add',
                handler: function (){
                                mostrarFormulario()
                }
            },{
                iconCls: 'myimagebuttoneditar',
                itemId: 'editar',
                height:30,
                width:100,
                text: 'Editar',
                id: 'editarUsuario',
                disabled: true,
                action: 'editar',
                handler: function (){
                    editarFormulario()
                }
            },{
                iconCls: 'myimagebuttonborrar',
                height:30,
                width:100,
                disabled: true,
                 id: 'eliminarUsuario',
                text: 'Eliminar',
                action: 'delete',
                handler: function(){
                    eliminarFormulario();
                }

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
                height: 370,
                width: 950,
                title: 'Usuarios',
               
                items       :   listadoCamposFormulario
                    
            });
        //main.show();
/*Fin componenete principal*/   
        

//_===============================FORMULARIO================================================================

    var panel=Ext.create('Ext.tab.Panel', {
    alias: 'widget.mytabpanel',

    requires: [
        'MyApp.view.MyTabPanelViewModel',
        'Ext.panel.Panel',
        'Ext.tab.Tab',
        'Ext.form.fieldset',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.form.field.File',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label'
    ],

    viewModel: {
        type: 'mytabpanel'
    },
    height: 616,
//    width: 494,
    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            height: 445,
            width: 553,
            iconCls:'myimagebuttonpanel',
            layout: 'absolute',
            title: 'Datos Personales',
            items: [
                {
                    xtype: 'fieldset',
                    x: 10,
                    y: 10,
                    height: 180,
                    width: 690,
                    layout: 'absolute',
                    title: 'Datos Basicos',
                    items: [
                        {
                           xtype: 'textfield',
                            x: 10,
                            y: 10,
                            width: 300,
                            id:'txtNombre',
                            emptyText:'Escriba su nombre',
                            maxLength: 10,
                            allowBlank: false,
                            fieldLabel: 'Nombre(*):'
                        },
                        {
                            xtype: 'textfield',
                            x: 320,
                            y: 10,
                            width: 300,
                            emptyText:'Escriba su apellido',
                            allowBlank: false,
                            id:'txtApellido',
                            fieldLabel: 'Apellido(*):'
                        },

                        {
                            xtype: 'datefield',
                            x: 10,
                            y: 50,
                            width: 300,
                            id:'txtFecha',
                            emptyText:'Escriba su fecha de nacimiento',
                            allowBlank: false,
                            format:'Y-m-d',
                            minValue: new Date(), //<-- min date is today
                            value:new Date(),
                            fieldLabel: 'Fecha de Nacimiento:(*)'
                        },
                        {
                            xtype: 'combobox',
                            x: 320,
                            y: 55,
                            width: 170,

                            fieldLabel: 'Telefono:',
                            id : 'cmbCodigodeArea',
                            store: codigoAreaStore,
                            valueField: 'id',
                            displayField: 'codigo',   
                            queryMode: 'remote',
                            typeAhead: true,
                            emptyText:'Seleccionar',
                            triggerAction: 'all',
                            editable: false,
                            selecOnFocus: true

                        },
                         {
                            xtype: 'numberfield',
                            x: 495,
                            y: 55,
                            width: 130,
                            emptyText:'Escriba su telefono',
                           
                            id:'txtTelefono',
                            fieldLabel: ''
                        },
                        {
                            xtype: 'combobox',
                            x: 10,
                            y: 100,
                            width: 170,
                            fieldLabel: 'Celular (*):',
                            id : 'cmbCodigodeOperadora',
                            store: codigoOperadoraStore,
                            valueField: 'id',
                            displayField: 'codigo',   
                            queryMode: 'remote',
                            typeAhead: true,
                            emptyText:'Seleccionar',
                            triggerAction: 'all',
                            editable: false,
                            selecOnFocus: true
                        },
                        {
                            xtype: 'numberfield',
                            x: 185,
                            y: 100,
                            width: 130,
                            emptyText:'Escriba su celular',
                            allowBlank: false,
                            id:'txtCelular',
                            fieldLabel: ''
                        }
                       
                     
                      
                    ]
                },

{
                    xtype: 'fieldset',
                    x: 10,
                    y: 200,
                    height: 200,
                    width: 690,
                    layout: 'absolute',
                    title: 'Datos del Usuario',
                    items: [
                        {
                            xtype: 'textfield',
                            x: 10,
                            y: 3,
                            width: 300,
                            id:'txtNick',
                            emptyText:'Escriba su nick',
                            allowBlank: false,
                            fieldLabel: 'Usuario-Nick (*):'
                        },
                        {
                            xtype: 'textfield',
                             x: 10,
                            y: 35,
                            width: 300,
                            name:'email',
                            vtype: 'email',
                            emptyText:'Escriba su correo electronico',
                            allowBlank: false,
                            id:'txtCorreo',
                            fieldLabel: 'Correo Electronico (*):'
                        },
                      
                           {
                            xtype: 'textfield',
                            x: 10,
                            y: 80,
                            width: 300,
                            id:'txtClave',
                            name:'txtClave',
                            emptyText:'Escriba su contraseña',
                            allowBlank: false,
                            inputType: 'password', 
                            fieldLabel: 'Contraseña (*):',
                            listeners: {
                                validitychange: function(field){
                                    field.next().validate();
                                },
                                blur: function(field){
                                    field.next().validate();
                                }
                             }
                             },
                        {
                            xtype: 'textfield',
                            x: 10,
                            y: 115,
                            width: 300,
                            id:'txtClave2',
                            inputType: 'password', 
                            emptyText:'Escriba su contraseña',
                            fieldLabel: 'Confirme su Contraseña:',
                            initialPassField: 'txtClave'
                                                        
                        },
                          {
                            xtype: 'filefield',
                            id: 'fotoUsuarioArchivo',
                            name:'ufile_Usuario[]',
                            x: 320,
                            y: 120,
                            emptyText:'Foto de perfil',
                            allowBlank: false,
                            buttonText:'Seleccionar',
                            width: 340,
                            fieldLabel: 'Foto:',
                            onChange: function()
                                   {
                                      previewImage(Ext.getCmp('fotoUsuarioArchivo').getEl().down('input[type=file]').dom.files[0]);
                                   }
                                 
                        },
                        
                         {
                            xtype: 'image',
                            x: 450,
                            y: 3,
                            id:'imagenUsuario',
                            src:'vista/img/foto.jpg',
                            height:100,
                            width: 100
                        }
                    ]
                },


                  {
                            xtype: 'label',
                            id:'lblDatosO',
                            text: '(*) Datos Obligatorios.',
                            x:10,
                            y:410
                }

            ],

                dockedItems: [
                {
                    xtype: 'toolbar',
                    x: 84,
                    y: 515,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonguardar',
                            id:'btnGuardar',
                            text: 'Guardar'


                        },
                        {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonlimpiar',
                            id:'btnLimpiar',
                            text: 'Limpiar',
                            handler: function(){
                                limpiar()
                            }
                        },
                          {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonsalir',
                            id:'btnSalir',
                            text: 'Salir',
                            handler: function (){
                                      cerrar()    
                                   }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'absolute',
            iconCls:'myimagebuttonpanel',
            title: 'Datos de Seguridad',
            items: [
               
                {
                   xtype: 'fieldset',
                   x: 10,
                    y: 10,

                    height: 190,
                    width: 690,
                    layout: 'absolute',
                    title: 'Preguntas de Seguridad:',
                    items: [
                     {
                            xtype: 'combobox',
                            x: 10,
                            y: 10,
                            width: 300,
                            fieldLabel: 'Pregunta (*)',
                             id : 'cmbPregunta1',
                            store: comboPregunta1Store,
                            valueField: 'id',
                            displayField: 'descripcion',   
                            queryMode: 'remote',
                            typeAhead: true,
                            emptyText:'Seleccionar',
                            triggerAction: 'all',
                            editable: false,
                            selecOnFocus: true,
                            listeners:{
                              select:function(obj,record,index){
                                      var dept = Ext.getCmp('cmbPregunta2');
                                dept.store.loadData(record.data.id);
                              }
                          }
                        },
                        {
                            xtype: 'textfield',
                            x: 320,
                            y: 10,
                            width: 300,
                            emptyText:'Escriba su respuesta',
                            allowBlank: false,
                            id:'txtRespuesta1',
                            fieldLabel: 'Respuesta Secreta:'
                             },

                        {
                            xtype: 'combobox',
                            x: 10,
                            y: 60,
                            width: 300,
                            fieldLabel: 'Pregunta (*):',
                            id : 'cmbPregunta2',
                            store: comboPregunta1Store,
                            valueField: 'id',
                            displayField: 'descripcion',   
                            queryMode: 'remote',
                            typeAhead: true,
                            emptyText:'Seleccionar',
                            triggerAction: 'all',
                            editable: false,
                           
                            mode: 'remote',
                            selecOnFocus: true
                        },

                        {
                            xtype: 'textfield',
                            x: 320,
                            y: 60,
                            width: 300,
                            id:'txtRespuesta2',
                            emptyText:'Escriba su respuesta',
                            allowBlank: false,
                            fieldLabel: 'Respuesta Secreta:'
                        },

                        {
                            xtype: 'textfield',
                            x: 10,
                            y: 100,
                            width: 300,
                            id:'txtPregunta3',
                            emptyText:'Escriba su pregunta',
                            allowBlank: false,
                            fieldLabel: 'Pregunta Secreta (*):'
                        },
                        {
                            xtype: 'textfield',
                            x: 320,
                            y: 100,
                            width: 300,
                            emptyText:'Escriba su respuesta',
                            allowBlank: false,
                            id:'txtRespuesta3',
                            fieldLabel: 'Respuesta Secreta:'
                        }
                       
                    ]
                },
                           {
                    xtype: 'fieldset',
                   x: 10,
                    y: 210,
                    height: 150,
                    width: 690,
                    layout: 'absolute',
                    title: '',
                    items: [
                     {
                            xtype: 'label',
                            id:'lblTitulo',
                            text: 'Para poder recuperar su contraseña debe guardar la informacion de las preguntas con sus respuestas.Primero debe seleccionar cualquiera de las preguntas establecidas por el administrador, en la tercera casilla debe colocar la pregunta de su prefencia. Recuerde que deden ser preguntas y respuestas que recuerde posteriormente para poder ingresar nuevamente al sistema en caso de que haya olvidado su clave. '
                        }
                       
                    ]
                },

                  {
                            xtype: 'label',
                            id:'lblDatosO2',
                            text: '(*) Datos Obligatorios.',
                            x:10,
                            y:360
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    x: 1,
                    y: 500,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonguardar',
                            id:'btnGuardar2',
                            text: 'Guardar'

                        },
                        {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonlimpiar',
                            id:'btnLimpiar2',
                            text: 'Limpiar'
                        },
                         {
                            xtype: 'button',
                            height: 30,
                            width: 100,
                            iconCls : 'myimagebuttonsalir',
                            id:'btnSalir2',
                            text: 'Salir',
                             handler: function (){
                                        cerrar()    
                                    }


                        }
                    ]
                }
            ]  

        }
    ]

});

    
        var main = Ext.define('App.miVentana', {
            extend: 'Ext.window.Window',
            id: 'miVentana',
            renderTo    :   "contenido",
            title: 'Nuevo Usuario',
            closeAction :'hide',
            closable    : false,
            resizable   : false,
            floatting   :   true,
            //hidden        :   true,
            x           :   150,
            y           :   -120,
            border      :   true,
            modal       :   false,
            frame       :   true,
            height: 540,
            width: 720,
            items       :   [panel]
        });

    });
//********************************FUNCIONES**********************************************************
    
    
    //Funcion para registrar los datos de un banco
    function registrarUsuario() {
        Ext.Ajax.request({
            url: 'control/registrarUsuario.php',
            method: 'GET',
            params: {
                ajax: 'true',
                nombre: Ext.getCmp('txtNombre').getValue().replace(/ +/g,'-'),
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
    function actualizarUsuario() {
        Ext.Ajax.request({
            url: 'control/buscarUsuario.php',
            method: 'GET',
            params: {
                ajax: 'true',
               
            },
            //Retorno exitoso de la pagina servidora a traves del formato JSON
            success: function( resultado, request ) {
            datos = Ext.JSON.decode(resultado.responseText);
                if (datos.exito) {
                    

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
   
    //Funcion que muestra el formulario y permite Registrar
    function mostrarFormulario(){
        var acum;    
        //variable que permite saber que es un registrar
        encontrado=0;  
        if(ventana==null) 
            ventana = Ext.create ('App.miVentana')
        limpiar();
        ventana.show();
    }
    
    //Funcion que muestra el formulario y permite Actualizar
    function editarFormulario(){
        //Trae la grid para poder actualizar al editar
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection()) {
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
       

            Ext.Ajax.request({
                url: 'control/buscarUsuario.php',
                method: 'GET',
                params: {
                    ajax: 'true',
                    id: row.get('usuarios.id'),
                },
                //Retorno exitoso de la pagina servidora a traves del formato JSON
                success: function( resultado, request ) {
                    datos = Ext.JSON.decode(resultado.responseText);
                    if (datos.exito) {  

                        encontrado=1;
                        if(ventana==null)  
                            ventana = Ext.create ('App.miVentana');
                            Ext.getCmp('txtNombre').setValue(datos.datos.usuarios.nombre);
                            Ext.getCmp('txtApellido').setValue(datos.datos.usuarios.apellido);
                            Ext.getCmp('txtFecha').setValue(datos.datos.usuarios.fecha_nacimiento);
                            Ext.getCmp('cmbCodigodeArea').setValue(datos.datos.usuarios.codigo_area);
                            Ext.getCmp('txtTelefono').setValue(datos.datos.usuarios.telefono);
                            Ext.getCmp('cmbCodigodeOperadora').setValue(datos.datos.usuarios.codigo_operadora);
                            Ext.getCmp('txtCelular').setValue(datos.datos.usuarios.celular);
                            Ext.getCmp('txtNick').setValue(datos.datos.usuarios.login);
                            Ext.getCmp('txtClave').setValue(datos.datos.usuarios.password);
                            Ext.getCmp('txtPregunta3').setValue(datos.datos.usuarios.pregunta_secreta);
                            Ext.getCmp('txtRespuesta3').setValue(datos.datos.usuarios.respuesta_secreta);

                            Ext.getCmp('cmbBanco').setValue(datos.datos.usuarios.cuentas.bancos.nombre);
                            Ext.getCmp('txtCuenta').setValue(datos.datos.usuarios.cuentas.nro_cuenta);
                            Ext.getCmp('txtCedula').setValue(datos.datos.usuarios.cedula);
                            Ext.getCmp('txtCorreo').setValue(datos.datos.usuarios.correo);
                       ventana.show();


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
    }


 function eliminarFormulario(){
        //Trae la grid para poder actualizar al editar
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection()) {
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
       

            Ext.Ajax.request({
                url: 'control/eliminarUsuario.php',
                method: 'GET',
                params: {
                    ajax: 'true',
                    id: row.get('usuarios.id'),
                },
                //Retorno exitoso de la pagina servidora a traves del formato JSON
                success: function( resultado, request ) {
                    datos = Ext.JSON.decode(resultado.responseText);
                    if (datos.exito) {  
                        Ext.Msg.alert('Mensaje', datos.msg);
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
    }







    //Funcion que limpia los campos
    function limpiar(){
            Ext.getCmp('txtNombre').setValue('');
            Ext.getCmp('txtApellido').setValue('');
            Ext.getCmp('txtFecha').setValue('');
            Ext.getCmp('cmbCodigodeArea').setValue('');
            Ext.getCmp('txtTelefono').setValue('');
            Ext.getCmp('cmbCodigodeOperadora').setValue('');
            Ext.getCmp('txtCelular').setValue('');
            Ext.getCmp('txtNick').setValue('');
            
            Ext.getCmp('txtPregunta3').setValue('');
            Ext.getCmp('txtRespuesta3').setValue('');
           
            
           // Ext.getCmp('txtCorreo').setValue('');
       
    }

    //Funcion que cierra la ventana emergente
    function cerrar(){
        ventana.close();
        Ext.getCmp('editarUsuario').setDisabled(true);
        Ext.getCmp('eliminarUsuario').setDisabled(true);
    }