





$(document).ready(function(){
    var text="<table>";
    count=1;
    $("#btn").click(function(){
// collectdata 
     var total =parseInt($("#total").val());
      var leftRow =parseInt($("#lr").val());
      
       var rightRow= parseInt($("#rr").val());
       
       
       var seatInRow = leftRow+rightRow;
       var row = Math.ceil(total/seatInRow);

// insert array 
var grid = [];

counts=1;

    for (let i = 0; i < row; i++) {
      grid[i] = [];

      for (let j = 0; j <5; j++) {
        grid[i][j] = count;
        counts++;
      }
    }
    console.log(grid); 
// creat button 

        for(let i=1;i<=row;i++){
   
            
                // if(j==leftRow){
                  text+="<tr><td>"+ count++ +"</td><td>"+ count++ +"</td><td></td><td>"+ count++ +"</td><td>"+ count++ +"</td><td>"+ count++ +"</td></tr>"
                   


                    // text+= "<button class='bb' style='margin-left:20px'>"+count+"</button>"; 
                // }
            //     else{
            //     text+= "<button class='bb' >"+count+"</button>";
            // }
                
            

          
        }
        text+="</table>"
        $("#ddd").html(text)
    })
})