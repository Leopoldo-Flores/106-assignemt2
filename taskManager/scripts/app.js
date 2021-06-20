var important = false;
var serverUrl = "http://fsdiapi.azurewebsites.net/";

function toggleImportant(){
    if(!important){
        important = true;
        $("#iImportant").removeClass("far").addClass("fas");
     }else{
         important= false;
         $("#iImportant").removeClass("fas").addClass("far");
     }
}

function saveTask(){
    console.log("save");
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#selDueDate").val();
    let color = $("#selColor").val();

    let task= new Task(title, important, category, description, location, dueDate, color);
    console.log(task);
    console.log(JSON.stringify(task));

    //send object to a backend server
    $.ajax({
        url: serverUrl +"api/tasks/",
        type:"POST",
        data: JSON.stringify(task),
        contentType:"application/json",
        success: function(res){
            console.log("SERVER ", res);

        },
        error: function(eDetails){
            console.error("ERROR Saving", eDetails);

        }
    });

    //display the task
    displayTask(task);
}

function displayTask(task){

    let syntax = 
    `<div class="task">
        <i class='important fas fa-star'></i> 
        <div class="description">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <lable class="due-date">${task.dueDate}</lable>
        <lable class="location">${task.location}</lable>
     </div>`;

    $("#pendingList").append(syntax);

}

function init(){
    console.log("My Task Manager");

    //load data
    //hook events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
}

window.onload=init;
