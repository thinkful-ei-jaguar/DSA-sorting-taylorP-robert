const {LinkedList} = require('./ll')

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2); //grabs index of middle
    let left = array.slice(0, middle); //gets left half
    let right = array.slice(middle, array.length);//gets right half

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}; 

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};



const list=[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
//##1
/* function main(){
    const a = mergeSort(list);
    console.log(a);

}

main();  */
//[21,1] will be returned

//after 16 recursive calls it will be sorted
//[21,1] ,[26,45]will be first list sorted onto each other
//l:[1,21,16,45]R:[29,28,2,9] is the 7 recursive call


//##2
//const list2 =[3,9,1,14,17,24,22,20]
//the could have been either 14 or 17
//const list3 =[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//              [10,3,9,12],[15,19,14,16,17,13]   i,j   
//   we get 2 arrays and then we have 13 as new pivot on 2nd and 12 on first
// const list4 =[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//               [10,3 ,12 ,9] [14,17,15,19 ,16]
// we get 2 arrays and then we have 14 as new pivot on 2nd and 10 on first                                     
            //p
const list5=[89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,
    88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,
    3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,
    54,84,34,53,78,40,14,5]
                        //i,j
function qSort(array,start=0,end=array.length){
    //console.log(array.length);
    if(start>end){
        return
    }
    const firstP=qSortP(array,start,end)
    array=qSort(array,firstP,end-1);
    array=qSort(array,start,firstP-1)
    return array;

}
function qSortP(array,start,end){
    const pivot = array[start];//89
    let j = end-1;//100i
    for (let i = end-1; i > start; i--) {
        //34>=89
        if (array[i] >= pivot) {
            swap(array, i, j);
            j--;
        }
    }          
    swap(array,start,j);
    return j;
}


function main2(){
    // qSort(list5);
    // console.log(list5);
    //const b = quickSort(list5);
    //console.log(b);
  const list = new LinkedList()
  list.insertLast(5)
  list.insertLast(4)
  list.insertLast(6)
  list.insertLast(2)
  list.insertLast(1)
  console.log(mSort(list))

}

main2();  

function mSort(ll, start=0, end=0) {
  if (ll === null) {
    return ll;
  }

 
  const middle = Math.floor(ll.counter()/2) //counter of middle
  // let left = mSort(ll, start, middle); //gets left half
  // let right = mSort(ll, middle +1, end);//gets right half

  left = mSort(left);
  right = mSort(right);
  return mergeLL(left, right, ll);

}

function mergeLL(left, right, ll) {
  let leftIndex = left.head;
  let rightIndex = right.head;
  let outputIndex = ll.head;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (leftIndex.value < rightIndex.value) {
          ll.insertAfter(leftIndex);
      }
      else {
          ll.insertBefore(rightIndex);
      }
  }

  while (leftIndex.next !== null) {
      ll.insertAfter(outputIndex);

      leftIndex = leftIndex.next
  }

  while (rightIndex.next !== null) {
    ll.insertAfter(outputIndex);

    rightIndex = rightIndex.next
}
  return ll;
};

//console.log(mSort(list5))

