
async function merge(ele, low, mid, high){
    console.log('In merge()');
    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
             // pause
             while (sorting == true) {
                await waitforme(delay);
             }


        await waitforme(delay);
        console.log('In merge left loop');
      
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){

             // pause
             while (sorting == true) {
                await waitforme(delay);
             }

        await waitforme(delay);
        console.log('In merge right loop');
       
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        console.log('In merge while loop');
       
        
        // pause
        while (sorting == true) {
            await waitforme(delay);
        }
        
        // To add color for which two r being compared for merging
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){

         // pause
      while (sorting == true) {
        await waitforme(delay);
      }

        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){

         // pause
      while (sorting == true) {
        await waitforme(delay);
      }

        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

// const mergeSortbtn = document.querySelector(".mergeSort");
// mergeSortbtn.addEventListener('click', async function(){
//     let ele = document.querySelectorAll('.bar');
//     let l = 0;
//     let r = parseInt(ele.length) - 1;
//     disableSortingBtn();
//     disableSizeSlider();
//     disableNewArrayBtn();
//     await mergeSort(ele, l, r);
//     enableSortingBtn();
//     enableSizeSlider();
//     enableNewArrayBtn();
// });


const mergeSortbtn = document.querySelector(".mergeSort");

mergeSortbtn.addEventListener("click", async function () {

    mergeSortbtn.classList.add("selected-btn");

    let bars = document.querySelectorAll(".bar");
    let s = 0;
    let e = bars.length;

    disable_size_slider();
    disable_sorting();
    disable_new_array();
    triger_pp();
    await mergeSort(bars, s, e - 1);
    mergeSortbtn.classList.remove("selected-btn");
    remove_pp();
    enable_size_slider();
    enable_sorting();
    enable_new_array();
});

