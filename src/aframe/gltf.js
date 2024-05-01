AFRAME.registerComponent('gltf', {
    schema: {
      
    },
  
    init: function () {
        console.log(this.el.object3D.userData)
    },
  
  });