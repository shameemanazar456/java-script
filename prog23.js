//w.a.p to dispaly the no whose exponential is in the reange of 8-36
//-here user can input the exponential
//power=2  1=1 2=4  3-9 4-16  5-25 6-36 7-49 //3 4 5 6
//power 3 1-1 2-8 3-27 4-64 // 2 3

p=2
i=1
while(i<36)
{
    temp=i**p
    if(temp>=8 && temp<=36)
    {
        console.log(i);
    }
    i++
}