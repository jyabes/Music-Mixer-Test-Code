console.log("JS file connected")

/* Styles for the drop zones */
.drop-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 20px auto;
    max-width: 600px;
}

.drop-zone {
    min-height: 150px;
    border: 2px dashed #aaa;
    background-color: #f5f5f5;
    border-radius: 10px;
}

/* Styles for the draggable icons */
.icon-container img {
    width: 100%;
    cursor: grab;
}

/* Styles for the active drag state of the icons */
.icon-container img:active {
    cursor: grabbing;
}