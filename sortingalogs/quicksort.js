async function partition(items, left, right) {
  if (left < right) {

    // pause
    while (sorting == true) {
      await waitforme(delay);
    }

    let pivotIndex = left;
    var pivot = parseInt(items[pivotIndex].style.height); //first element
    items[pivotIndex].style.background = "red";

    for (let i = left; i <= right; i++) {
      if (i != pivotIndex) {
        items[i].style.background = "pink";
      }
    }

    (i = left), //left pointer
      (j = right); //right pointer
     while (i < j) {

        // pause
      while (sorting == true) {
        await waitforme(delay);
      }

      await waitforme(delay);
      while (parseInt(items[i].style.height) <= pivot && i <= right - 1) {
        i++;
      }
      await waitforme(delay);
      while (parseInt(items[j].style.height) > pivot && j >= left + 1) {
        j--;
      }
      items[i].style.background = "blue";
      items[j].style.background = "blue";

    //   pause
      while (sorting == true) {
        await waitforme(delay);
      }

      if (i < j) {
        await waitforme(delay);
        swap(items[i], items[j]); //sawpping two element
      }

      items[i].style.background = "pink";
      items[j].style.background = "pink";
    }

    for (let i = left; i <= right; i++) {
      items[i].style.background = "cyan";
    }

    swap(items[j], items[left]);
    return j;
  }
}

async function quickSort(items, left, right) {
  var index;
  if (left >= right) {
    items[left].style.background = "green";
    return items;
  }

  while (sorting == true) {
    await waitforme(delay);
  }

  index = await partition(items, left, right); //index returned from partitio
  items[index].style.background = "green";
  await waitforme(delay);
  await quickSort(items, left, index - 1);
  await waitforme(delay);
  await quickSort(items, index + 1, right);

  return items;
}

let Quick_sort_method = document.querySelector(".quickSort");
Quick_sort_method.addEventListener("click", async function () {
  Quick_sort_method.classList.add("selected-btn");

  let bars = document.querySelectorAll(".bar");
  let s = 0;
  let e = bars.length;

  disable_size_slider();
  disable_sorting();
  disable_new_array();
  triger_pp();
  await quickSort(bars, s, e - 1);
  Quick_sort_method.classList.remove("selected-btn");
  remove_pp();
  enable_size_slider();
  enable_sorting();
  enable_new_array();
});
