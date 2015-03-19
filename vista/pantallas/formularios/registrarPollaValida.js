var encontrado = 0;
var ventana=null;
var ventanaRetirado=null;
var ventanaResultados=null;
var storeValida;
var Titulo="dasdas";
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
    
    //---------------------STORE DE COMBO VALIDA--------------------------------
   
    
    var storeComboValida = Ext.create('Ext.data.Store', {
        fields: ['id', 'nombre'],
        data : [
            {"id":"1", "nombre":"Primera"},
            {"id":"2", "nombre":"Segunda"},
            {"id":"3", "nombre":"Tercera"},
            {"id":"4", "nombre":"Cuarta"},
            {"id":"5", "nombre":"Quinta"},
            {"id":"6", "nombre":"Sexta"},
            {"id":"7", "nombre":"Septima"}
            //...
        ]
    });
    
    //--------------------------------------------------------------------------
    
    //----------------------STORE DE EMERGENTE----------------------------------
    
            Ext.define('gridResultadosValida', {
                extend: 'Ext.data.Model',
                fields: [
                    {name:'id', type:'int'},
                    {name:'polla.hipodromos.nombre', type:'string'},
                    {name:'nro_valida', type:'int'},
                    {name:'primero', type:'int'},
                    {name:'segundo', type:'int'},
                    {name:'tercero', type:'int'},
                    {name: 'nro_carrera_text', type: 'string', convert: function(v,record)
                        {
                            if(record.get('nro_valida')==1)
                                return  "Primero";
                            else if(record.get('nro_valida')==2)
                                return  "Segundo";
                            else if(record.get('nro_valida')==3)
                                return  "Tercero";
                            else if(record.get('nro_valida')==4)
                                return  "Cuarto";
                            else if(record.get('nro_valida')==5)
                                return  "Quinto";
                            else if(record.get('nro_valida')==6)
                                return  "Sexto";
                            else if(record.get('nro_valida')==7)
                                return  "Septimo";
                        }
                    },
                
                    {name:'estatus', type:'int'},
                    

                ] 
        });


            storeValida = Ext.create('Ext.data.Store', {
            model: 'gridResultadosValida',
            autoLoad: true,
            proxy: {

                type: 'ajax',
                url: 'control/buscarValida.php', 

                reader: { 
                    type: 'json',
                    root: 'validas',
                    totalProperty: 'total',

                }
            }
        });
                                            
    //--------------------------------------------------------------------------                              
                                            
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
                   
                    Ext.getCmp('retiradoPollaJugada').setDisabled(false);
                   
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
                width:150,
                id: 'resultadoPollaJugada',
                text: 'Registrar Valida',
                disabled: true,
                handler: function (){
                    mostrarFormulario()
                }
            },{
                iconCls: 'icon-save',
               
                height:30,
                width:150,
                text: 'Ver Resultados',
                id: 'verPollaJugada',
                disabled: true,
               
                handler: function (){
                    mostrarResultado()
                }
            },
            {
                iconCls: '',
               
                height:30,
                width:150,
                text: 'Retirar',
                id: 'retiradoPollaJugada',
                disabled: true,
               
                handler: function (){
                    mostrarFormularioRetirado()
                }
            },
            {
                iconCls: 'myimagebuttonborrar',
                height:30,
                width:100,
                disabled: true,
                id: 'eliminarPollaJugada',
                text: 'Eliminar',
                action: 'delete'
            }
        ]
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
                title       :   "Pollas en Juego",
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
                width       :   850,
               
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
                    id: 'cmbValida',
                    store: storeComboValida, 
                    fieldLabel: 'Valida a Registrar:',
                    valueField: 'id',
                    displayField: 'nombre',   
                    queryMode: 'remote',
                    typeAhead: true,
                    emptyText:'Seleccionar',
                    triggerAction: 'all',
                    editable: false,
                     listeners: {
                       select: function (cmb, record, index){
                           validarRegistro()
                           //Ext.Msg.alert("Error", "dasd no conectado");
                       },  
                     },
                    selecOnFocus: true
                    
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
                    xtype: 'numberfield',
                    x: 5,
                    y: 18,
                    width: 180,
                    emptyText:' Primero',
                    maxLength:2,
                    id: 'idPrimerLugar',
                    fieldLabel: 'Ganadores'
                },
                {
                    xtype: 'numberfield',
                    x: 210,
                    y: 18,
                    width: 80,
                    emptyText:' Segundo',
                    maxLength:2,
                    id: 'idSegundoLugar',
                    fieldLabel: ''
                },
                {
                    xtype: 'numberfield',
                    x: 315,
                    y: 18,
                    width: 80,
                    emptyText:' Tercero',
                    maxLength:2,
                   
                    id: 'idTercerLugar',
                    fieldLabel: ''
                },
                {
                    xtype: 'numberfield',
                    x: 315,
                    y: 30,
                    width: 80,
                    id: 'id_polla_valida',
                    emptyText: 'id',
                    hidden:true,
                    maxLength:2,
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
                    //if(encontrado=0){
                       registrarValida()                              
                    //}
                    //else{
                        //actualizarBanco()
                    //}
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
                    limpiar()
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
            title: 'Nueva Valida',
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


//------------------------------------------------------------------------------


//-----------------------Panel para Registrar Retirados---------------------------

    var panel3 = Ext.create('Ext.form.Panel', {
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
                    id: 'cmbValidaRetirado',
                    store: storeComboValida, 
                    fieldLabel: 'Valida :',
                    valueField: 'id',
                    displayField: 'nombre',   
                    queryMode: 'remote',
                    typeAhead: true,
                    emptyText:'Seleccionar',
                    triggerAction: 'all',
                    editable: false,
                    selecOnFocus: true
                    
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
            title: 'Retirado',
            items: [
                {
                    xtype: 'numberfield',
                    x: 5,
                    y: 18,
                    width: 180,
                    emptyText:' Primero',
                    maxLength:2,
                    id: 'idRetirado',
                    fieldLabel: 'Retirado'
                },
                {
                    xtype: 'numberfield',
                    x: 315,
                    y: 30,
                    width: 80,
                    id: 'id_polla_valida_retirado',
                    //emptyText: 'id',
                    hidden:true,
                    maxLength:2,
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
                    //if(encontrado=0){
                      // registrarValida()                              
                    //}
                    //else{
                        //actualizarBanco()
                    //}
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
                    limpiarRetirado()
                }
            },
            {
                iconCls : 'myimagebuttonsalir',
                height:30,
                width:100,
                text: 'Salir',
                handler: function (){
                    cerrarRetirado()    
                }
            }]
        }]
    });
    
        var main = Ext.define('App.miVentanaRetirado', {
            extend: 'Ext.window.Window',
            
            renderTo    :   "contenido",
            title: 'Nuevo Retirado',
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
            items       :   [panel3]
        });


//------------------------------------------------------------------------------




//-----------------------Panel para Mostrar Resultados--------------------------
  
  
    var listadoCamposFormulario2=Ext.create('Ext.grid.Panel', {
    store: storeValida,
    id: 'listado',
    height:170,
    layout:'fit',
    requires: ['Ext.toolbar.Paging'],
        listeners : {
                itemdblclick: function(dv, record, item, index, e) {
                    record = listadoCamposFormulario2.getStore().getAt(index);
                    Ext.Msg.alert('Banco','Title: '+record.get('nombre')); //alert temporal
                }, 
                itemclick: function(dv, record, item, index, e) {
                   
                   
                   
                }
            },
    columns:[
               {
                    id:'id',
                    header: 'id', 
                    width: 0, 
                    sortable: true,
                    hidden: true,
                    flex:0,
                    dataIndex: 'id'
               },
               {
                    text: 'Valida',
                    width: 260,
                    dataIndex: 'nro_carrera_text',
                    hidden: false,
                    flex:2,
                    sorteable: true
                },
                {
                    text: 'Primero',
                    width: 260,
                    dataIndex: 'primero',
                    hidden: false,
                    flex:1,
                    sorteable: true
                },
                {
                    text: 'Segundo',
                    width: 260,
                    dataIndex: 'segundo',
                    hidden: false,
                    flex:1,
                    sorteable: true
                },
                {
                    text: 'Tercero',
                    width: 260,
                    dataIndex: 'tercero',
                    hidden: false,
                    flex:1,
                    sorteable: true
                }
                
            ],
    dockedItems: [
            {
            xtype: 'toolbar',
            items: [
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
   
    ],


});

  
    
    var main2 = Ext.define('App.miVentanaResultado', {
            extend: 'Ext.window.Window',
             layout      :   "card",
            renderTo    :   "contenido",
            title: Titulo,
            closeAction :'hide',
            closable    : false,
            resizable   : false,
            floatting   :   true,
            //hidden        :   true,
            x			:	30,
	    y			:	20,
	    border		:   true,
            modal               :   false,
            frame 		:   true,
            height		:	370,
            width		:	500,
            items       :   listadoCamposFormulario2
        });
    
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
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection())
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
                Ext.getCmp('id_polla_valida').setValue(row.get('pollas.id'));
  
        //variable que permite saber que es un registrar
        encontrado=0;  
        if(ventana==null) 
            ventana = Ext.create ('App.miVentanaBanco')
        
        ventana.show();
    }

    //Funcion que muestra el formulario y permite Actualizar
    function mostrarResultado(){
        //Trae la grid para poder actualizar al editar
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection()) {
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
                        encontrado=1;
                        
                        Titulo = "Resultados de la Polla deL Hipodromo "+row.get('pollas.hipodromos.nombre');
                       
                      
                        if(ventanaResultados==null)  
                            ventanaResultados = Ext.create ('App.miVentanaResultado');
                        
                        ventanaResultados.setTitle(Titulo);
                        //Recarga Grid con las validas de la polla que es
                        storeValida.load({params:{id_polla: row.get('pollas.id')}});
                        ventanaResultados.show();

        }
    }



    //Funcion que limpia los campos de la pantalla registrar Valida
    function limpiar(){
            //Ext.getCmp('id_polla_valida').setValue(0);
            Ext.getCmp('cmbValida').setValue('');
            Ext.getCmp('idPrimerLugar').setValue('');
            Ext.getCmp('idSegundoLugar').setValue('');
            Ext.getCmp('idTercerLugar').setValue('');
                
 
    }
    
     //Funcion que limpia los campos de la pantalla registrar Retirados
    function limpiarRetirado(){
            
            Ext.getCmp('cmbValidaRetirado').setValue('');
            Ext.getCmp('idRetirado').setValue('');
   
    }

    //Funcion que cierra la ventana emergente Registrar Valida
    function cerrar(){
        ventana.close();
        Ext.getCmp('verPollaJugada').setDisabled(true);
        Ext.getCmp('eliminarPollaJugada').setDisabled(true);
        Ext.getCmp('resultadoPollaJugada').setDisabled(true);
        Ext.getCmp('retiradoPollaJugada').setDisabled(true);
    }
    
    //Funcion que cierra la ventana emergente Registrar Retirado
    function cerrarRetirado(){
        ventanaRetirado.close();
        Ext.getCmp('verPollaJugada').setDisabled(true);
        Ext.getCmp('eliminarPollaJugada').setDisabled(true);
        Ext.getCmp('resultadoPollaJugada').setDisabled(true);
        Ext.getCmp('retiradoPollaJugada').setDisabled(true);
    }
    
    //Funcion que cierra la ventana emergente 
    function cerrarVer(){
        ventanaResultados.close();
        Ext.getCmp('verPollaJugada').setDisabled(true);
        Ext.getCmp('eliminarPollaJugada').setDisabled(true);
        Ext.getCmp('resultadoPollaJugada').setDisabled(true);
        Ext.getCmp('retiradoPollaJugada').setDisabled(true);
    }
    
    //Funcion para Validar si la valida ya fue registrada
    function validarRegistro() {
        Ext.Ajax.request({
            url: 'control/buscarValidaPolla.php',
            method: 'GET',
            params: {
                ajax: 'true',
                id_polla: Ext.getCmp('id_polla_valida').getValue(),
                nro_valida: Ext.getCmp('cmbValida').getValue(),
            },
            //Retorno exitoso de la pagina servidora a traves del formato JSON
            success: function( resultado, request ) {
            datos = Ext.JSON.decode(resultado.responseText);
                if (datos.exito=="true") {
                    Ext.getCmp('idPrimerLugar').setValue(datos.validas.primero);
                    Ext.getCmp('idSegundoLugar').setValue(datos.validas.segundo);
                    Ext.getCmp('idTercerLugar').setValue(datos.validas.tercero);
                     Ext.Msg.alert("Error", "Valida ya Registrada");
                     encontrado=1;
                }
                else{
                    
                }
            },
            //No hay retorno de la pagina servidora
            failure: function() {
                Ext.Msg.alert("Error", "Servidor no conectado");
            }
        });
    }
    
    
    
    //Funcion para Registrar una nueva Valida
    function registrarValida() {
        Ext.Ajax.request({
            url: 'control/registrarValida.php',
            method: 'GET',
            params: {
                ajax: 'true',
                id_polla: Ext.getCmp('id_polla_valida').getValue(),
                nro_valida: Ext.getCmp('cmbValida').getValue(),
                primero: Ext.getCmp('idPrimerLugar').getValue(),
                segundo: Ext.getCmp('idSegundoLugar').getValue(),
                tercero: Ext.getCmp('idTercerLugar').getValue(),
                estatus: 1,
            },
            //Retorno exitoso de la pagina servidora a traves del formato JSON
            success: function( resultado, request ) {
            datos = Ext.JSON.decode(resultado.responseText);
                if (datos.exito) {
                    Ext.Msg.alert('Atención', datos.msg);
                    cerrar();
                    limpiar();
                }
            },
            //No hay retorno de la pagina servidora
            failure: function() {
                Ext.Msg.alert("Error", "Servidor no conectado");
            }
        });
    }

   //Funcion que muestra el formulario y permite Registrar Retirados
    function mostrarFormularioRetirado(){
        var acum;    
        listadoCamposFormulario = Ext.getCmp('listadoCamposFormulario');
        if (listadoCamposFormulario.getSelectionModel().hasSelection())
            var row = listadoCamposFormulario.getSelectionModel().getSelection()[0];
                Ext.getCmp('id_polla_valida_retirado').setValue(row.get('pollas.id'));
  
        //variable que permite saber que es un registrar
        encontrado=0;  
        if(ventanaRetirado==null) 
            ventanaRetirado = Ext.create ('App.miVentanaRetirado')
        
        ventanaRetirado.show();
    }
