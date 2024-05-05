/* Se usó https://rapidapi.com/hub con youtube v3*/

const API='https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL6NdkXsPL07KN01gH2vucrHCEyyNmVEx4&part=snippet&maxResults=12';
const content=null||document.getElementById('content');
const options={
  method:'GET',
  headers:{
		'X-RapidAPI-Key': '30feb8713dmsh4c9869e0f888f47p11e6fbjsnf10d29f2c0e4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}};
  async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;
  }
(async()=>{
  try{
    const videos=await fetchData(API);
    let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,12).join('')}`;
    content.innerHTML=view;
  }catch(error){
    console.log(error);
  }
})();