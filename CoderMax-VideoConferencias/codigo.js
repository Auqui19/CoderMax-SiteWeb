$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombres y Apellidos",
              key: "name"
          },
          {
              text: "Profesor / Curso",
              key: "profe"
          },
          {
              text: "Día",
              key: "gender"
          },
          {
              text: "Hora",
              key: "hora"
          },        
        ],
 
        //carga de datos
        data: [{
              name: 'Alonso Auqui',
              profe: 'J',
              gender: 'D',
              hora: 'B'    
          },
          {
              name: 'María Pía',
              profe: 'R',
              gender: 'L',
              hora: 'B'
          },
          {
              name: 'Pedro',
              profe: 'F',
              gender: 'M',
              hora: 'A'
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Registrar" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "profe") {
              return '<select class="form-control"><option value="R"> Roberto Aguilar / CSS</option><option value="E">Eduardo Perez / JavaScript</option><option value="V">Valeria Fernandez / PHP</option><option value="J">Jose Pezo / ReactJS</option><option value="A"> Alvaro Lozano / Angular</option><option value="F">Fernanda Altamirano / Python</option><option value="Z">Rodolfo Maldonado / JAVA</option></select>';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="L">Lunes</option><option value="M">Martes</option><option value="MR">Miercoles</option><option value="J">Jueves</option><option value="V">Viernes</option><option value="S">Sábado</option><option value="D">Domingo</option></select>';
            }
            if (columnKey == "hora") {
                return '<select class="form-control"><option value="A">8AM - 11AM</option><option value="B">1PM - 3PM</option><option value="C">5PM - 8PM</option></select>';
            }

            return '<input type="text" placeholder="Tú nombre" class="form-control" />';
        }

    });	    
});    