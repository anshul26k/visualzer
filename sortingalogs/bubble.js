async function bubles() {
  let ele = document.querySelectorAll(".bar");

  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";

      while(sorting==true){
        await waitforme(delay);
      }

      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
          await waitforme(delay);
          swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[[ele.length-i-1]].style.background="green";
  }
    ele[0].style.background="green";
};


let buble_sort = document.querySelector(".bubbleSort");
buble_sort.addEventListener("click",async function(){
    // console.log("heelo");
 
    disable_size_slider();
    disable_sorting();
    disable_new_array();
    triger_pp();
    buble_sort.classList.add("selected-btn");
    await bubles();
    buble_sort.classList.remove("selected-btn");
    remove_pp();
    enable_size_slider();
    enable_sorting();
    enable_new_array();
});
