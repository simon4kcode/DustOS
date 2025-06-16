      let tabCount = 1;
      const maxTabs = 15;
      const tabsContainer = document.querySelector(".tab-wrapper");
      const labelsContainer = tabsContainer.querySelector(".tabby-labels");
      const contentsContainer = tabsContainer.querySelector(".tabby-contents");
      const addTabButton = document.getElementById("addTab");
      const tabGroupName = "tab-group";
      let tabby = new Tabby(".tab-wrapper");
      function createTab() {
        if (tabCount >= maxTabs) {
          alert("Maximum of 15 tabs reached.");
          return;
        }
        tabCount++;
        const tabId = `tab${tabCount}`;
        const input = document.createElement("input");
        input.type = "radio";
        input.id = tabId;
        input.name = tabGroupName;
        input.hidden = true;
        tabsContainer.insertBefore(input, labelsContainer);
        const label = document.createElement("label");
        label.classList.add("tabby-label");
        label.setAttribute("for", tabId);
        label.setAttribute("aria-selected", "false");
        label.textContent = `Tab ${tabCount}`;
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close-tab");
        closeBtn.setAttribute("aria-label", `Close Tab ${tabCount}`);
        closeBtn.innerHTML = "&times;";
        label.appendChild(closeBtn);
        labelsContainer.appendChild(label);
        const content = document.createElement("div");
        content.classList.add("tabby-content");
        content.id = `${tabId}-content`;
        content.setAttribute("aria-hidden", "true");
        content.innerHTML = `<iframe src="https://galacticsurf.boats" title="Tab ${tabCount} Content"></iframe>`;
        contentsContainer.appendChild(content);
        input.checked = true;
        updateAriaStates();
        tabby.destroy();
        tabby = new Tabby(".tab-wrapper");
      }
      function updateAriaStates() {
        const inputs = tabsContainer.querySelectorAll(
          `input[name="${tabGroupName}"]`
        );
        const labels = labelsContainer.querySelectorAll(".tabby-label");
        const contents = contentsContainer.querySelectorAll(".tabby-content");
        inputs.forEach((input, i) => {
          const checked = input.checked;
          labels[i].setAttribute("aria-selected", checked ? "true" : "false");
          contents[i].setAttribute("aria-hidden", checked ? "false" : "true");
        });
      }
      addTabButton.addEventListener("click", createTab);
      labelsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("close-tab")) {
          const label = event.target.parentElement;
          const forId = label.getAttribute("for");
          if (labelsContainer.children.length === 1) {
            return;
          }
          const input = tabsContainer.querySelector(`input#${forId}`);
          if (input) input.remove();
          const content = document.getElementById(`${forId}-content`);
          if (content) content.remove();
          label.remove();
          tabCount--;
          const inputs = tabsContainer.querySelectorAll(
            `input[name="${tabGroupName}"]`
          );
          if (![...inputs].some((input) => input.checked)) {
            if (inputs.length) {
              inputs[0].checked = true;
            }
          }
          updateAriaStates();
          tabby.destroy();
          tabby = new Tabby(".tab-wrapper");
        }
      });
      tabsContainer.addEventListener("change", (event) => {
        if (event.target.name === tabGroupName) {
          updateAriaStates();
        }
      });
