function openProject(projectName, el) {
  // Replace these with your real video sources or URLs
  const projects = {
    nexipraz: 'Media/Nexipraz.mp4',
    brand1: 'Media/Cebrolux.mp4',
    brand2: 'Media/Galderma.mp4',
    brand3: 'Media/Brand3.mp4',
    brand4: 'Media/Brand4.mp4',
    brand5: 'Media/Brand5.mp4',
  };

  // Prevent multiple videos playing at once: remove old videos
  document.querySelectorAll('.card video').forEach(v => v.remove());

  // Create video element
  const video = document.createElement('video');
  video.src = projects[projectName];
  video.autoplay = true;
  video.controls = true;
  video.loop = true;
  video.className = 'preview-video';

  // Append to clicked card
  el.appendChild(video);
}
