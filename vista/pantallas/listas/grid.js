
/* aut@r:  Morgan Huascar  Checa Lopez*/

Ext.onReady(function() {
			
			/*Region que contiene la lista de los empleados de ENDE*/
		var dbListado = new Ext.data.JsonStore({
		  proxy: {
			type: 'ajax',
			url: '../control/mostrarGrid.php', // archivo que contiene las operaciones de postgres
			actionMethods: {
				create: 'POST', 
				read: 'POST', 
				update: 'POST', 
				destroy: 'POST'
				},
			reader: {
			  type: 'json',
			  //idProperty: 'success'
			  }
		  },
			fields: [
				{name: 'id', type: 'integer'}, 'nombre', 'login',{name:'fecha_creacion', type: "date", format: 'd-m-Y' }, {name:'fecha_jugada', type: "date", format: 'd-m-Y'}, 'estatus','valida'
					]
		});
		dbListado.load();



		var listadoCamposFormulario=Ext.create('Ext.grid.Panel', {
			store: dbListado, //datos del grid
			layout:'fit',
			listeners : {
    			itemdblclick: function(dv, record, item, index, e) {
			       var record = listadoCamposFormulario.getStore().getAt(index);

					Ext.Msg.alert('Test','Title: '+record.get('login')); //alert temporal
			    }
			},
			columns: [
			   {
					id:'id',
					header: 'id', 
					width: 60, 
					sortable: true,
					hidden: true,
					dataIndex: 'id'
			   },
			   {
					text: 'Hipodromo',
					width: 240,
					sortable: true,
					hideable: false,
					dataIndex: 'nombre'
				},
				{
					text: 'Creador',
					width: 220,
					dataIndex: 'login',
					hidden: false,
					sorteable: true
				},
				{
					text: 'Fecha Creacion',
					width: 220,
					dataIndex: 'fecha_creacion',
					xtype: 'datecolumn',      // the column type
    				format: 'd-m-Y',           // the displayed format
					hidden: false,
					sorteable: true
				}
			]
			
        
    });
		/*Fin contenedor empleados de ENDE*/
		
		
		
		
		/*Defino el componentes principal de mi pagina dento un panel en el cual estaran todas mis regiones declaradas*/

		var main = new Ext.Panel({
			renderTo	: 	"contenido",
			layout		:	"card",
			floatting	: 	true,
			hidden		:	true,
			title 		: 	"Productos",
			border		:   true,
			modal       :   false,
			frame 		:   true,
			x			:	30,
		    y			:	20,
		    height		: 	250,
	        width		: 	950,
	        tbar:{
				defaults:{
					scope:this
				},
				items:[
			
  { xtype: 'button', text: 'Button 1',ctCls: 'x-toolbar-grey-btn' }	
				]
				},
			items		:	listadoCamposFormulario
					
			});
		//main.show();
/*Fin componenete principal*/	
		

});