const character = document.querySelector('.character');
const treesElement = document.querySelector('#trees');
const labelTrees = document.querySelectorAll('.label-tree');
const labelCount = document.querySelector('#label-count');
const characterFront = document.querySelector('#character-front');
const characterWalking = document.querySelector('#character-walking');
const firstLocation = document.querySelector('.container');
const secondLocation = document.querySelector('.beach-container');
const age = document.querySelector('#age');
const phaseTwo = document.querySelector('.phase-two');
const items = document.querySelectorAll('.item');
const bigBoss = document.querySelector('.big-boss');;
const ifce = document.querySelector('#ifce');
const fireworks = document.querySelector('.fireworks')

secondLocation.style.display = 'none';
phaseTwo.style.display = 'none';
characterWalking.style.display = 'none';

let treeCount = 0;
let itemCount = 0;

labelTrees.forEach(labelTree => {
    labelTree.addEventListener('click', (event) => {
        const tree = event.target.closest('.tree');
        const treeRect = tree.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect(); 
        
        const offsetX = treeRect.left - characterRect.left;
        const offsetY = treeRect.top - characterRect.top;

        characterWalking.style.display = 'block';
        characterFront.style.display = 'none';

        character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        setTimeout(() => {
            treeCount++;
            labelCount.textContent = `x${treeCount}`;
            labelTree.style.display = 'none';
            characterWalking.style.display = 'none';
            characterFront.style.display = 'block';

            if (treeCount === 3) {
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

age.addEventListener('click', (event) => {
    secondLocation.style.display = 'none';
    phaseTwo.style.display = "block";
    
    const characterPhaseTwo = phaseTwo.querySelector('.character');
    const characterWalkingPhaseTwo = phaseTwo.querySelector('#character-walking');
    const characterFrontPhaseTwo = phaseTwo.querySelector('#character-front');
    
    characterWalkingPhaseTwo.style.display = 'none';
    characterFrontPhaseTwo.style.display = 'block';
    characterPhaseTwo.style.transform = 'translate(0px, 0px)';
    itemCount = 0;
})

function getCurrentCharacter() {
    const currentPhase = document.querySelector(
        '.container:not([style*="display: none"]), .phase-two:not([style*="display: none"])'
    );
    return {
        character: currentPhase.querySelector('.character'),
        walking: currentPhase.querySelector('#character-walking'),
        front: currentPhase.querySelector('#character-front')
    };
}

items.forEach(item => {
    item.addEventListener('click', (event) => {
        const { character, walking, front } = getCurrentCharacter();

        const tree = event.target.closest('.tree');
        const treeRect = tree.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect(); 
        
        const offsetX = treeRect.left - characterRect.left;
        const offsetY = treeRect.top - characterRect.top;

        walking.style.display = 'block';
        front.style.display = 'none';

        character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        setTimeout(() => {
            itemCount++;
            item.style.display = 'none';
            walking.style.display = 'none';
            front.style.display = 'block';

            if (itemCount === 2) {
                setTimeout(() => {
                    phaseTwo.style.display = 'none';
                    bigBoss.style.display = 'block';

                    const characterBigBoss = bigBoss.querySelector('.character');
                    const walkingBigBoss = bigBoss.querySelector('#character-walking');
                    const frontBigBoss = bigBoss.querySelector('#character-front');

                    walkingBigBoss.style.display = 'none';
                    frontBigBoss.style.display = 'block';
                    characterBigBoss.style.transform = 'translate(0px, 0px)';
                }, 500);
            }
        }, 500);
    });
});

ifce.addEventListener('click', (event) => {
    const { character, walking, front } = getCurrentCharacter();

    const tree = event.target.closest('.tree');
    const treeRect = tree.getBoundingClientRect();
    const characterRect = character.getBoundingClientRect(); 
    
    const offsetX = treeRect.left - characterRect.left;
    const offsetY = treeRect.top - characterRect.top;

    walking.style.display = 'block';
    front.style.display = 'none';

    character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    setTimeout(() => {
        walking.style.display = 'none';
        front.style.display = 'block';
        fireworks.style.display = 'block'
    }, 500);
});