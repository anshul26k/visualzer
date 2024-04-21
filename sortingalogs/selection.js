async function Selection(){
        let ele = document.querySelectorAll(".bar");
        for(let i=0;i<ele.length;i++){
            let temp = i;
            ele[i].style.background = "blue";


            // pause
            while (sorting == true) {
                await waitforme(delay);
            }

            await waitforme(delay);
            for(let j=i+1;j<ele.length;j++){
                
                    ele[j].style.background = "red";


                    // pause
                    while (sorting == true) {
                        await waitforme(delay);
                    }

                    await waitforme(delay);
                    if(parseInt(ele[j].style.height)<parseInt(ele[temp].style.height)){
                        ele[temp].style.background = "cyan";
                        temp = j;
                    }else{
                        ele[j].style.background = "cyan";
                    }
                   
            }
            await waitforme(delay);
            swap(ele[i],ele[temp]);
            ele[temp].style.background = "cyan";
            ele[i].style.background = "green";
        }
}


let selection_sort_method = document.querySelector(".selectionSort");
selection_sort_method.addEventListener("click",async function(){
    selection_sort_method.classList.add("selected-btn");
    disable_size_slider();
    disable_sorting();
    disable_new_array();
    triger_pp();
    await Selection();
    selection_sort_method.classList.remove("selected-btn");
    remove_pp();
    enable_size_slider();
    enable_sorting();
    enable_new_array();
});