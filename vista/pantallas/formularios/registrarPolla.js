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

cargarDatosUsuario();
Ext.define('comboHipodromo', {
        extend: 'Ext.data.Model',
        fields: [
            {name:'id', type:'int'},
            {name:'nombre', type:'string'},
            {name:'estatus', type:'int'},
        ],
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'comboHipodromo',
        autoLoad: true,
        proxy: {
           
            type: 'ajax',
            url: 'control/comboUsuarios.php', // archivo que contiene las operaciones de postgres

            reader: { 
                type: 'json',
                root: 'bancos'
            }
        }
    });

    var panel = Ext.create('Ext.form.Panel', {
        //renderTo: 'fi-form',
        layout: 'absolute',
        height: 370,
        width: 950,
        frame: false,
        collapsible: false,
        collapsed: false,
        closable: false,
        //title: 'ADICIONAR DOCUMENTO',
        bodyPadding: '10 10 0',

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

    items: [
        {
            xtype: 'fieldset',
            x: 20,
            y: 10,
            height: 60,
            width: 640,
            layout: 'absolute',
            title: '',
            items: [
                {
                    xtype: 'combobox',
                    x: 20,
                    y: 10,
                    width: 280,
                    displayField: 'nombre',
                    valueField: 'id',
                    store:store,
                   // store: comboUsuario, //asignandole el store
                   // valueField: 'login',
                   // displayField:'id',
                    fieldLabel: 'Hipodromo'
                    

                },
                {
                    xtype: 'datefield',
                    x: 340,
                    y: 10,
                    width: 280,
                    
                    fieldLabel: 'Fecha de Jugada'

                }
            ]
        },
        {
            xtype: 'fieldset',
            x: 20,
            y: 70,
            height: 180,
            width: 640,
            layout: 'absolute',
            title: 'Polla',
            items: [
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 660,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 770,
                    y: 70,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 550,
                    y: 110,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 440,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 330,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 220,
                    y: 30,
                    width: 90,
                    fieldLabel: ''
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 70,
                    width: 190,
                    fieldLabel: 'Segundo'
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 30,
                    width: 190,
                    
                    id: 'primero',
                name: 'primero',
                    fieldLabel: 'Primero'
                },
                {
                    xtype: 'textfield',
                    x: 10,
                    y: 110,
                    width: 190,
                    fieldLabel: 'Tercero'
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
                    text: 'Sesta'
                },
                {
                    xtype: 'label',
                    x: 770,
                    y: -2,
                    text: 'Septima'
                }
            ]
        },
        {
            xtype: 'fieldset',
            x: 20,
            y: 260,
            height: 65,
            width: 640,
            layout: 'absolute',
            title: '',
            items: [
        
		        {
		            xtype: 'button',
		            x: 580,
		            y: 10,
		            height: 30,
		            width:70,
		            text: 'Jugar'
		        },
		        {
		            xtype: 'button',
		            x: 680,
		            y: 10,
		            height: 30,
		            width:70,
		            text: 'Limpiar'
		        },
		        {
		            xtype: 'button',
		            x: 780,
		            y: 10,
		            height: 30,
		            width:70,
		            text: 'Grabar'
		        }
		    ]
        }
     ]
    });
    
    var main = new Ext.Panel({
        renderTo    :   "contenido",
        title: 'Registrar Polla',
        layout: 'absolute',
        floatting	: 	true,
        hidden		:	true,
        x			:	30,
	    y			:	20,
	    border		:   true,
		modal       :   false,
		frame 		:   true,
        height		:	370,
        width		:	950,
        layout		:	'fit',
        items		:	[panel]
    });

    //ventana.show();

});


   function cargarDatosUsuario() {
     Ext.Ajax.request({
            url: 'control/comboUsuarios.php',
         method: 'GET',
             //Retorno exitoso de la pagina servidora a traves del formato JSON
             success: function( resultado, request ) {
                datos=Ext.JSON.decode(resultado.responseText);
                nombreUsuario = datos.nombre;
                Ext.getCmp('primero').setValue(datos.nombre);
             },
             //No hay retorno de la pagina servidora
             failure: function() {
              Ext.Msg.alert("Error", "Servidor no conectado");
             }
            });
   }
   
