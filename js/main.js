const elems = document.querySelector('.dropdown-trigger')
M.Dropdown.init(elems, { coverTrigger: false, onOpenStart: () => elems.setAttribute('aria-expanded', true), onCloseEnd: () => elems.setAttribute('aria-expanded', false) })