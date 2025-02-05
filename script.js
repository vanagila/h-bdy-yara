const character = document.querySelector('.character');
const treesElement = document.querySelector('#trees');
const labelTrees = document.querySelectorAll('.label-tree');
const labelCount = document.querySelector('#label-count');
const characterFront = document.querySelector('#character-front');
const characterWalking = document.querySelector('#character-walking');
const firstLocation = document.querySelector('.container');
const secondLocation = document.querySelector('.beach-container')

secondLocation.style.display = 'none';

characterWalking.style.display = 'none';
let count = 0;

labelTrees.forEach(labelTree => {
    labelTree.addEventListener('click', (event) => {
        const tree = event.target.closest('.tree');
        const treeRect = tree.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();
        labelTree.style.cursor = 'pointer';
        
        const offsetX = treeRect.left - characterRect.left;
        const offsetY = treeRect.top - characterRect.top;

        characterWalking.style.display = 'block';
        characterFront.style.display = 'none';

        character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        setTimeout(() => {
            count++;
            labelCount.textContent = `x${count}`;
            labelTree.style.display = 'none';
            characterWalking.style.display = 'none';
            characterFront.style.display = 'block';

            if (count === 3) {
                setTimeout(() => {
                    firstLocation.style.display = 'none';
                    secondLocation.style.display = 'flex';
                }, 500);
            }
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bottle = document.querySelector('.bottle');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    bottle.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});