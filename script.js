// Define sample data for each category
const samples = {
    vggsound: [
        {
            video: 'samples/vggsound/sample1.mp4',
            audio: 'samples/vggsound/sample1.mp3',
            description: 'Text prompt: A dog barking in a park.'
        },
        {
            video: 'samples/vggsound/sample2.mp4',
            audio: 'samples/vggsound/sample2.mp3',
            description: 'Text prompt: A car honking in a busy street.'
        }
    ],
    greatest_hits: [
        {
            video: 'samples/greatest_hits/sample1.mp4',
            audio: 'samples/greatest_hits/sample1.mp3',
            description: 'Text prompt: A drumstick hitting a metal surface.'
        },
        {
            video: 'samples/greatest_hits/sample2.mp4',
            audio: 'samples/greatest_hits/sample2.mp3',
            description: 'Text prompt: A wooden stick scratching gravel.'
        }
    ],
    zero_shot: [
        {
            video: 'samples/zero_shot/sample1.mp4',
            audio: 'samples/zero_shot/sample1.mp3',
            description: 'Generated audio for a person clapping hands.'
        },
        {
            video: 'samples/zero_shot/sample2.mp4',
            audio: 'samples/zero_shot/sample2.mp3',
            description: 'Generated audio for a waterfall in a forest.'
        }
    ]
};

// Function to load samples into the page
function loadSamples(dataset) {
    const sampleContainer = document.getElementById('samples');
    sampleContainer.innerHTML = ''; // Clear existing samples

    samples[dataset].forEach(sample => {
        const sampleElement = document.createElement('div');
        sampleElement.className = 'sample';

        const description = document.createElement('p');
        description.textContent = sample.description;

        const video = document.createElement('video');
        video.src = sample.video;
        video.controls = true;

        const audio = document.createElement('audio');
        audio.src = sample.audio;
        audio.controls = true;

        sampleElement.appendChild(description);
        sampleElement.appendChild(video);
        sampleElement.appendChild(audio);

        sampleContainer.appendChild(sampleElement);
    });
}
