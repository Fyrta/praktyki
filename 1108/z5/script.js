const nums = [2, 3, 4, 5];
var sum = 0;
var x = 0;
function tabsum(){
    if(x < nums.length){
        sum += nums[x];
        x++;
        tabsum();
    }else{
        document.write(nums , " suma: " , sum);
    }
}
