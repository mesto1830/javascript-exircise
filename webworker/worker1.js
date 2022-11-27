self.onmessage = e => {
  console.log(e.data)
  const nums = e.data.numsArray
  for (let i = 0; i < 10000000; i++) {
    nums.push(i)
  }
  postMessage({data:nums,message:'Loop is done.'})
}