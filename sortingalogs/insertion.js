async function insertion() {
  let ele = document.querySelectorAll(".bar");
  ele[0].style.background = "green";

  for (let i = 1; i < ele.length; i++) {
  
    let j = i - 1;
    let temp = ele[i].style.height;
    ele[i].style.background = "blue";

      // pause
      while (sorting == true) {
        await waitforme(delay);
      }

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(temp)) {
          // pause



      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      // pause
      while (sorting == true) {
        await waitforme(delay);
      }

      await waitforme(delay);

      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = temp;
    ele[i].style.background = "green";
  }
}

let insertion_sort_method = document.querySelector(".insertionSort");
insertion_sort_method.addEventListener("click", async function () {
  insertion_sort_method.classList.add("selected-btn");
  disable_size_slider();
  disable_sorting();
  disable_new_array();
  triger_pp();
  await insertion();
  insertion_sort_method.classList.remove("selected-btn");
  remove_pp();
  enable_size_slider();
  enable_sorting();
  enable_new_array();
});
