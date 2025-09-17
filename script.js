function openProject(projectName, el) {
  // Replace these with your real video sources or URLs
  const projects = {
    nexipraz: 'Nexipraz.html',      // should open in new tab
    brand1: 'Cebrolux.html',       // should open in new tab
    brand2: 'Media/Galderma.mp4',  // inline video
    brand3: 'Media/Brand3.mp4',
    brand4: 'Media/Brand4.mp4',
    brand5: 'Media/Brand5.mp4',
  };

  // If this project is an HTML page (link), open in new tab
  if (projects[projectName].endsWith('.html') || projects[projectName].startsWith('http')) {
    window.open(projects[projectName], '_blank');
    return;
  }

  // Otherwise, treat it as a video
  // Remove any other playing videos
  document.querySelectorAll('.card video').forEach(v => v.remove());

  // Create and append video element
  const video = document.createElement('video');
  video.src = projects[projectName];
  video.autoplay = true;
  video.controls = true;
  video.loop = true;
  video.className = 'preview-video';

  el.appendChild(video);
}