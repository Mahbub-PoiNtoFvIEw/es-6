/*
Truthy :
> true = const x = true
> any number (+ve, -ve) will be truthy other than 0, x = -5/5, x = 0(false)
> any string x = 'mahbub', other than x = '' (false)
> '0' true,
> {} true,
> [], [1,2] true

false:
> false, x = false
> '' (empty string)
> undefined, x = undefined
> null,  x = null;
*/

const x = ' ', y = '';
if(y){
    console.log('true')
}else{
    console.log('false')
}