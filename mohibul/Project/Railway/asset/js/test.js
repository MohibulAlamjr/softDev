  
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

// grid = [
//   [ 0, 1 ]
//   [ 2, 3 ]
//   [ 4, 5 ]
// ];

console.log(grid); // 4

$(document).ready(function(){
    var text="";
    count=1;
    $("#btn").click(function(){
     var total =parseInt($("#total").val());
      var leftRow =parseInt($("#lr").val());
      
       var rightRow= parseInt($("#rr").val());
       
       var row = Math.ceil(total/5);
       var seatInRow = leftRow+rightRow;
        for(let i=1;i<=row;i++){
            text+="<br>"
            for(let j=0;j<seatInRow;j++){
                if(j==leftRow){
                    text+= "<button class='bb' style='margin-left:20px'>"+count+"</button>"; 
                }else{
                text+= "<button class='bb' >"+count+"</button>";}
                count++;
            }
          
        }
        $("#ddd").html(text)
    })
})