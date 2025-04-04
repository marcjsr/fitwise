document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-42').addEventListener('click', function () {
        createExerciseRow();
    });
});

function createExerciseRow() {
    const row = document.createElement('div');
    row.classList.add('exercise-row');
    document.querySelector('.container-wrapper').appendChild(row);
    createExerciseSection(row);
    createAddExerciseButton(row);
}

function createExerciseSection(row) {
    const section = document.createElement('div');
    section.classList.add('exercise-section');

    const container = document.createElement('div');
    container.classList.add('exercise-container');

    const close = document.createElement('div');
    close.classList.add('close');
    close.addEventListener('click', function () {
        if (row.querySelectorAll('.exercise-container').length > 1) {
            section.remove();
        } else {
            row.remove();
        }
    });

    const closeIcon = document.createElement('span');
    closeIcon.innerHTML = 'close';
    closeIcon.classList.add('material-icons-outlined');

    const exerciseName = document.createElement('div');
    exerciseName.classList.add('form-item');
    exerciseName.classList.add('exercise-input');

    const exerciseNameInput = document.createElement('input');
    exerciseNameInput.type = 'text';
    exerciseNameInput.placeholder = 'Exercise';
    exerciseNameInput.id = 'exercise_name';
    exerciseNameInput.classList.add('exercise-name');

    const exerciseNameLabel = document.createElement('label');
    exerciseNameLabel.textContent = 'Exercise';
    exerciseNameLabel.htmlFor = 'exercise_name';

    container.appendChild(close);
    close.appendChild(closeIcon);
    container.appendChild(exerciseName);
    exerciseName.appendChild(exerciseNameInput);
    exerciseName.appendChild(exerciseNameLabel);

    const addSet = document.createElement('div');
    addSet.classList.add('add-set');
    addSet.textContent = 'Add Set';

    addSet.addEventListener('click', function () {
        const setContainer = document.createElement('div');
        setContainer.classList.add('set-container');

        const weight = document.createElement('div');
        weight.classList.add('form-item');

        const weightInput = document.createElement('input');
        weightInput.type = 'text';
        weightInput.placeholder = 'Weight';
        weightInput.id = 'weight_input';
        weightInput.classList.add('set-input');

        const weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';
        weightLabel.htmlFor = 'weight_input';

        const reps = document.createElement('div');
        reps.classList.add('form-item');

        const repsInput = document.createElement('input');
        repsInput.type = 'text';
        repsInput.placeholder = 'Reps';
        repsInput.id = 'reps_input';
        repsInput.classList.add('rep-input');

        const repsLabel = document.createElement('label');
        repsLabel.textContent = 'Reps';
        repsLabel.htmlFor = 'reps_input';

        const optionsButton = document.createElement('button');
        optionsButton.classList.add('options-button');

        const optionsButtonIcon = document.createElement('span');
        optionsButtonIcon.textContent = 'more_vert';
        optionsButtonIcon.classList.add('material-icons-outlined');

        const removeSet = document.createElement('button');
        removeSet.classList.add('remove-set');
        removeSet.addEventListener('click', function () {
            setContainer.remove();
        });

        const removeSetIcon = document.createElement('span');
        removeSetIcon.innerHTML = 'close';
        removeSetIcon.classList.add('material-icons-outlined');

        setContainer.appendChild(weight);
        weight.appendChild(weightInput);
        weight.appendChild(weightLabel);
        setContainer.appendChild(reps);
        reps.appendChild(repsInput);
        reps.appendChild(repsLabel);
        setContainer.appendChild(optionsButton);
        optionsButton.appendChild(optionsButtonIcon);
        setContainer.appendChild(removeSet);
        removeSet.appendChild(removeSetIcon);
        container.appendChild(setContainer);
    });

    section.appendChild(container);
    section.appendChild(addSet);
    row.insertBefore(section, row.lastElementChild);
}

function createAddExerciseButton(row) {
    const addExercise = document.createElement('div');
    addExercise.classList.add('add-exercise');

    const addExerciseIcon = document.createElement('span');
    addExerciseIcon.innerHTML = 'add';
    addExerciseIcon.classList.add('material-icons-outlined');

    addExercise.addEventListener('click', function () {
        createExerciseSection(row);
    });

    row.appendChild(addExercise);
    addExercise.appendChild(addExerciseIcon);
}

function saveToFile() {
  const form = document.getElementById('workoutForm');
  const inputs = form.querySelectorAll('input');

  let data = 'Workout Data:\n';
  inputs.forEach(input => {
    data += `${input.name}: ${input.value}\n`;
  });

  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'workout-log.txt';
  a.click();

  URL.revokeObjectURL(url); // Clean up
}
