<template>
    <v-container>
        <!-- Dropdown for Project List -->
        <h3>Project name:</h3>
        <div class="dropdown">
            <button @click="toggleDropdown">{{ selectedOption || 'Select an option' }}</button>
            <div class="dropdown-menu" v-if="isDropdownOpen">
                <div v-for="option in options" :key="option" @click="selectOption(option)" class="dropdown-item">
                    {{ option }}
                </div>
            </div>
        </div>
        <!-- Project Details Section -->
        <v-card v-if="selectedProjectDetails" class="view-box mt-5 pa-3" :color="cardColor" width="1200">
            <v-card-title>{{ selectedProjectDetails.key }}</v-card-title>
            <v-card-subtitle>{{ selectedProjectDetails.summary }}</v-card-subtitle>
            <v-card-text>
                <strong>Assignee:</strong> {{ selectedProjectDetails.assignee }}<br />
                <strong>Issue Type:</strong> {{ selectedProjectDetails.issueType }}<br />
                <strong>Status:</strong> {{ selectedProjectDetails.status }}<br />
                <!-- <strong>Team Members:</strong> -->
                <!-- <ul>
                    <li v-for="(member, index) in selectedProjectDetails.team" :key="index">{{ member }}</li>
                </ul> -->
                <strong>Comments:</strong>
                <ul>
                    <li v-for="(comment, index) in selectedProjectDetails.comments" :key="index">{{ comment }}</li>
                </ul>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';

const options = ref([]);
const selectedOption = ref('');
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownOpen.value = false; // Close dropdown after selection
};

const cardColor = ref('indigo');

const projects = ref([
    {
        "key": "SCRUM-2",
        "summary": "Create an API",
        "status": "To Do",
        "assignee": "Sudhanshu Kumar",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "I’m optimistic about the direction we’re taking with the API. With a focus on usability, we can create something truly impactful for our users!",
            "I’m a bit concerned about the documentation for the API. Clear, comprehensive guides will be crucial for developers to adopt it smoothly. Let’s prioritize this!",
            "Feeling motivated by the team's ideas for the API! If we leverage everyone's input, we can create a powerful tool that meets our users' needs effectively!"
        ],
        "projectName": "Digithon Demo Project"
    },
    {
        "key": "SCRUM-1",
        "summary": "Create an UI Panel",
        "status": "To Do",
        "assignee": "Dr. Vishal Tyagi",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "Do we have to add button on panel",
            "I’m so excited about the potential of enhancing the UI Panel! Let’s brainstorm some creative ideas to make it truly user-friendly",
            "I’m feeling a bit frustrated with the current design approach. We need to simplify the user experience and make it more intuitive",
            "Great teamwork on the UI Panel! I’m here to support any efforts to refine our approach and make it even better. Let’s keep pushing forward!"
        ],
        "projectName": "Digithon Demo Project"
    },
    {
        "key": "DIG-2",
        "summary": "Create an IMEI Scanner",
        "status": "To Do",
        "assignee": "piyush jain",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "Super excited to see the IMEI Scanner coming together! This will really streamline our device management!",
            "I’m feeling a bit frustrated with the current limitations of the IMEI Scanner. We need to address these issues to ensure it meets user needs!",
            "I’m inspired by the potential of the IMEI Scanner! If we can nail this feature, it will make a significant impact on our workflow. Let’s make it happen!",
            "Great work on the IMEI Scanner, team! I’m here to support in any way to ensure we deliver a top-notch feature. Keep it up!"
        ],
        "projectName": " Digithon Demo Project 3"
    },
    {
        "key": "DIG-1",
        "summary": "Create a voucher functionality",
        "status": "To Do",
        "assignee": "sahil shroff",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "Can’t wait to see how the voucher functionality will enhance our user experience! This is going to be a game-changer!",
            "I’m feeling a bit overwhelmed with the current implementation of the voucher feature. We really need to streamline the process to avoid confusion.",
            "I have some concerns about the security of the voucher system. We need to ensure that it’s robust to prevent misuse. Let’s prioritize this",
            "I’m really inspired by the potential of the voucher functionality! If we implement it well, it could drive a lot of engagement. Let’s make it amazing"
        ],
        "projectName": " Digithon Demo Project 3"
    },
    {
        "key": "DDP2-4",
        "summary": "Create add to cart button on cart page",
        "status": "To Do",
        "assignee": "Sudhanshu Kumar",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "I'm really excited about implementing the 'Add to Cart' button! This feature will enhance the user experience by allowing customers to easily add items to their cart, streamlining the shopping process and potentially increasing sales.",
            "I have some concerns regarding the placement and visibility of the 'Add to Cart' button on the cart page. If it’s not prominent, users may miss it, which could lead to frustration. Ensuring it stands out will be crucial for usability.",
            "Great work so far, team! I’m here to support the implementation of the 'Add to Cart' button. If anyone encounters challenges, let’s collaborate to find effective solutions and ensure we deliver a top-notch feature.",
            "I’m feeling motivated by the positive feedback we've received regarding the 'Add to Cart' feature. Let’s make sure to incorporate user insights into the design to enhance its functionality and meet our customers' needs effectively"
        ],
        "projectName": "Digithon Demo - Project 2"
    },
    {
        "key": "DDP2-3",
        "summary": "Create a Barcode Scanner",
        "status": "To Do",
        "assignee": "Piyush Agrawal",
        "issueType": "Story",
        "issueDesc": null,
        "description": "Stories track functionality or features expressed as user goals.",
        "hosts": null,
        "comments": [
            "I'm really excited about the development of the barcode scanner! This feature will greatly enhance our efficiency and user experience!",
            "I’m inspired by the possibilities this barcode scanner offers! Let’s explore innovative ways to integrate it seamlessly into our workflow.",
            "Feeling motivated by the positive feedback on the barcode scanner concept! Let’s leverage this input to enhance its functionality and usability"
        ],
        "projectName": "Digithon Demo - Project 2"
    }
]);

const selectedProjectDetails = computed(() => {
    const project = projects.value.find(p => p.projectName === selectedOption.value);
    if (project !== undefined && project.assignee === 'piyush jain') {
        cardColor.value = '#f5f5f5';
    } else {
        cardColor.value = 'indigo';
    }
    return project ? project : '';
});

onBeforeMount(() => {
    options.value = projects.value.map(project => project.projectName);
    options.value = [ ...new Set(options.value) ];
})

</script>
  
<style scoped>
/* .dropdown {
    background-color: beige;
} */
.dropdown {
  position: relative;
  margin: 20px;
  background-color: beige;
}
.dropdown-menu {
  border: 1px solid #ccc;
  background-color: white;
  z-index: 1000;
}
.dropdown-item {
  padding: 8px;
  cursor: pointer;
}
.dropdown-item:hover {
  background-color: #f0f0f0;
}

.mt-5 {
    margin-top: 20px;
}

.pa-3 {
    padding: 20px;
}

</style>
  