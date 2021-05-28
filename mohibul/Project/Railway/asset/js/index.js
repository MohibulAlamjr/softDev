  
// var arr = [[],[],[],[],[]];
// for (var i=0; i < 5; i++) {
//  for (var j=0; j < 5; j++) {
//   arr[i][j]=1;
//  }
// }
// console.log(arr)

var grid = [];
row=Math.ceil(106/5);
count=1;

    for (let i = 0; i < row; i++) {
      grid[i] = [];

      for (let j = 0; j <5; j++) {
        grid[i][j] = count;
        count++;
      }
    }


console.log(grid); 
$(document).ready(function(){
    var text="";
    count=1;
    $("#btn").click(function(){
     var total =parseInt($("#total").val());
      var leftRow =parseInt($("#lr").val());
      
       var rightRow= parseInt($("#rr").val());
       
      
       
      
       var seatInRow = leftRow+rightRow;
       var row = Math.ceil(total/seatInRow);
        for(let i=1;i<=row;i++){
            text+="<br>"
            for(let j=0;j<seatInRow;j++){
                if(j==leftRow){
                   for(let m=0;m<row;m++){
                       for(let n=0;n<seatInRow;n++){
                           if(grid[m][n]==count){
                               if(n==0 || n==2 || n==4){
                                text+= "<button class='bb green' style='margin-left:80px'>"+count+"</button>";
                               }else{
                                text+= "<button class='bb' style='margin-left:80px'>"+count+"</button>";
                               }

                           }
                       }
                   }


                    
                }else{
                    for(let m=0;m<row;m++){
                        for(let n=0;n<seatInRow;n++){
                            if(grid[m][n]==count){
                                if(n==0 || n==2 || n==4){
                                 text+= "<button class='bb green'>"+count+"</button>";
                                }else{
                                 text+= "<button class='bb' '>"+count+"</button>";
                                }
 
                            }
                        }
                    }

               
            
            }
                count++;
            }
          
        }
        $("#ddd").html(text)
    })
})