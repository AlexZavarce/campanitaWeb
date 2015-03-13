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

    
    var panel = Ext.create('Ext.window.Window', {
        //renderTo: 'fi-form',
        layout: 'absolute',
        width: 400,
        height:900,
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

        items: [],

        
        buttons: [{
            text: 'Guardar',
            handler: function(){
                var form = this.up('form').getForm();
                if(form.isValid()){
                    form.submit({
                        url: 'control/formulario.php',
                        //title: 'Subiendo tu archivo',
                        waitMsg: 'Subiendo datos, espere porfavor...',
                        icon:'ext-mb-download',
						//method: 'GET',
                        success: function(fp, o) {
                            
							var redirect = "vista/index.php";
                            window.location = redirect;

							//msg('Success', 'Processed file "' + o.result.file + '" on the server');
                        },
						failure: function(fp, o)
						{
							msg('ERROR', 'Error al insertar "' + o.result.error + '"');
						}
                    });
                }
            }
        },{
            text: 'Limpiar datos',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
    });
    
panel.show();
 

//    ventana.show();

});


