<template>
  <div class="main">
    <div class="mv-cont">
      <!--This is for BOOT 1 !!!! -->
      <div is="model-viewer" :src="picked" camera-controls id="boot4">
        <button
          class="Hotspot"
          @click="changeColor(4)"
          slot="hotspot-1"
          data-position="155.78858254775957m 281.2481400045454m 299.9757633527579m"
          data-normal="0.16502746478654384m -0.11585581011521223m 0.9794607532355106m"
          data-visibility-attribute="visible"
        >
          <div class="HotspotAnnotation">
            Нос<br />
            <span class="annotation-desc">{{ this.partsDesc[4] }}</span>
          </div></button
        ><button
          class="Hotspot"
          slot="hotspot-3"
          data-position="98.54504815521796m 360.790017202538m 107.65103930317278m"
          data-normal="-0.6361254720825713m 0.7088618884530233m 0.30472808677005714m"
          data-visibility-attribute="visible"
          @click="changeColor(0)"
        >
          <div class="HotspotAnnotation">
            Застежка <br />
            <span class="annotation-desc">{{ this.partsDesc[0] }}</span>
          </div></button
        ><button
          class="Hotspot"
          slot="hotspot-8"
          data-position="218.66272262072596m 486.65027091612626m -3.40320129563662m"
          data-normal="0.9086943871159058m -0.050046014816845986m 0.4144513327581423m"
          data-visibility-attribute="visible"
          @click="changeColor(3)"
        >
          <div class="HotspotAnnotation">
            Тело<br />
            <span class="annotation-desc">{{ this.partsDesc[3] }}</span>
          </div>
        </button>
      </div>

      
    </div>
    <div class="panel">
      <form class="myform">
        <input
          name="boot-select"
          type="radio"
          id="boot1"
          value="boot4/scene.glb"
          v-model="picked"
        />
        <label for="boot1">Ботинок 1</label>
        <br />
        <input
          name="boot-select"
          type="radio"
          id="boot2"
          value="boot2/scene.gltf"
          v-model="picked"
        />
        <label for="boot2">Ботинок 2</label>
        <br />
        <input
          name="boot-select"
          type="radio"
          id="boot3"
          value="boot3/scene.gltf"
          v-model="picked"
        />
        
        <label for="boot3">Ботинок 3</label>
        
        <br />
        <input
          name="boot-select"
          type="radio"
          id="boot5"
          value="boot5/scene.gltf"
          v-model="picked"
        />

        <label for="boot5">Ботинок 4</label>
        
      </form>


      <label for="leather1" class="small-label">Черная текстура
      <br>
      <button id="leather1" @click="changeTexture('./leather1.jpg')">
      <img src="../../public/leather1.jpg" width="100">
      </button>
      </label>

      <label for="leather2" class="small-label">Коричневая текстура
      <br>
      <button id="leather2" @click="changeTexture('./leather2.jpg')">
      <img src="../../public/leather2.jpg" width="100">
      </button>
      </label>

      <label for="leather3" class="small-label">Красная текстура
      <br>
      <button id="leather3" @click="changeTexture('./leather3.jpg')">
      <img src="../../public/leather3.jpg" width="100">
      </button>
      </label>

      <label for="leather4" class="small-label">Синяя текстура
      <br>
      <button id="leather4" @click="changeTexture('./leather4.jpg')">
      <img src="../../public/leather4.jpg" width="100">
      </button>
      </label>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      showMe: true,
      picked: "",
      colors: [
        ["Цвет: Черный", [0, 0, 0]],
        ["Цвет: Белый", [50, 50, 50]],
        ["Цвет: Красный", [20, 10, 10]],
        ["Цвет: Зеленый", [10, 20, 10]],
        ["Цвет: Синий", [10, 10, 20]],
      ],
      partsDesc: {
        4: "Ткни на меня",
        0: "",
        3: "",
      },
    };
  },
  components: {},
  methods: {
    changeColor(num) {
      const modelViewerVariants = document.querySelector("model-viewer#boot4");
      const currColor =
        modelViewerVariants.model.materials[num].pbrMetallicRoughness
          .baseColorFactor;
      console.log(currColor);

      try {
        for (let i = 0; i < this.colors.length; i++) {
          if (this.colors[i][1] == currColor) {
            modelViewerVariants.model.materials[
              num
            ].pbrMetallicRoughness.setBaseColorFactor(this.colors[i + 1][1]);
            this.partsDesc[num] = this.colors[i + 1][0];
            break;
          } else {
            modelViewerVariants.model.materials[
              num
            ].pbrMetallicRoughness.setBaseColorFactor(this.colors[0][1]);
            this.partsDesc[num] = this.colors[0][0];
          }
        }
      } catch (error) {
        modelViewerVariants.model.materials[
          num
        ].pbrMetallicRoughness.setBaseColorFactor(this.colors[0][1]);
        this.partsDesc[num] = this.colors[0][0];
      }

      //modelViewerVariants.model.materials[4].pbrMetallicRoughness.setBaseColorFactor([30,30,30]);
    },

    changeTexture(path) {
      const model = document.querySelector("model-viewer#boot4");
      const material = model.model.materials[0]
      console.log(material);
      
      material.pbrMetallicRoughness.baseColorTexture.texture.source.setURI(path);
    
        
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small-label{
  font-size: 70%;
  padding:1px;
  margin:5px;
  width:150px;
  align-self: center;
}

button{
  background: none;
  border:none;
}
.annotation-desc {
  font-size: 60%;
}

.panel {
  background-color: beige;
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: right;
}
.main {
  display: flex;
}
.mv-cont {
  width: 50%;
  height:100%
}
model-viewer {
  width: 100%;
  height:668px;
  background-color: burlywood;
  margin-bottom: 5em;;
}

input[type="radio"] {
  display: none;
}

label {
  margin: 20px;
  padding: 10px;
  background-color: cadetblue;
  margin-top: 5px;
  display: inline-block;
  cursor: pointer;
}

.myform input[type="radio"]:checked + label {
  background: pink !important;
}

.myform {
  margin-top: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Hotspot {
  background: #fff;
  border-radius: 32px;
  border: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  height: 24px;
  padding: 8px;
  position: relative;
  transition: opacity 0.3s;
  width: 24px;
}

.Hotspot:not([data-visible]) {
  background: transparent;
  border: 4px solid #fff;
  box-shadow: none;
  height: 32px;
  pointer-events: none;
  width: 32px;
}

.Hotspot:focus {
  border: 4px solid rgb(0, 128, 200);
  height: 32px;
  outline: none;
  width: 32px;
}

.Hotspot > * {
  opacity: 1;
  transform: translateY(-50%);
}

.HotspotAnnotation {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0.8);
  display: block;
  font-family: Futura, Helvetica Neue, sans-serif;
  font-size: 18px;
  font-weight: 700;
  left: calc(100% + 1em);
  max-width: 128px;
  overflow-wrap: break-word;
  padding: 0.5em 1em;
  position: absolute;
  top: 50%;
  width: max-content;
}

.Hotspot:not([data-visible]) > * {
  opacity: 0;
  pointer-events: none;
  transform: translateY(calc(-50% + 4px));
  transition: transform 0.3s, opacity 0.3s;
}
</style>
