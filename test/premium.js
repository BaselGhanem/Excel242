(() => {
  'use strict';

  const THEME_KEY = `excelPro_theme`;
  const prefersDark = window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  const savedTheme = localStorage.getItem(THEME_KEY) || (prefersDark ? `dark` : `dark`);

  function applyTheme(theme) {
    const nextTheme = theme === `light` ? `light` : `dark`;
    document.documentElement.setAttribute(`data-theme`, nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    document.querySelectorAll(`#themeBtn, #themeToggle, .theme-btn, .icon-btn[title*="المظهر"]`).forEach((button) => {
      if (button && (button.id === `themeBtn` || button.id === `themeToggle` || button.classList.contains(`theme-btn`))) {
        button.textContent = nextTheme === `dark` ? `🌙` : `☀️`;
        button.setAttribute(`aria-label`, nextTheme === `dark` ? `تفعيل الوضع الفاتح` : `تفعيل الوضع الداكن`);
      }
    });
  }

  applyTheme(savedTheme);

  function ensureToastStack() {
    let stack = document.querySelector(`.premium-toast-stack`);
    if (!stack) {
      stack = document.createElement(`div`);
      stack.className = `premium-toast-stack`;
      stack.setAttribute(`aria-live`, `polite`);
      stack.setAttribute(`aria-atomic`, `true`);
      document.body.appendChild(stack);
    }
    return stack;
  }

  window.premiumToast = function premiumToast(title, message = ``, timeout = 2600) {
    const stack = ensureToastStack();
    const toast = document.createElement(`div`);
    toast.className = `premium-toast`;
    toast.innerHTML = `<div>✓</div><div><strong>${escapeHTML(title)}</strong>${message ? `<span>${escapeHTML(message)}</span>` : ``}</div>`;
    stack.appendChild(toast);
    window.setTimeout(() => {
      toast.style.opacity = `0`;
      toast.style.transform = `translateY(8px) scale(.98)`;
      window.setTimeout(() => toast.remove(), 220);
    }, timeout);
  };

  window.premiumConfirm = function premiumConfirm({ title = `تأكيد الإجراء`, message = `هل تريد المتابعة؟`, okText = `نعم`, cancelText = `إلغاء` } = {}) {
    return new Promise((resolve) => {
      const backdrop = document.createElement(`div`);
      backdrop.className = `premium-confirm-backdrop`;
      backdrop.innerHTML = `
        <div class="premium-confirm" role="dialog" aria-modal="true" aria-labelledby="premiumConfirmTitle">
          <h3 id="premiumConfirmTitle">${escapeHTML(title)}</h3>
          <p>${escapeHTML(message)}</p>
          <div class="premium-confirm-actions">
            <button type="button" class="premium-confirm-ok">${escapeHTML(okText)}</button>
            <button type="button" class="premium-confirm-cancel">${escapeHTML(cancelText)}</button>
          </div>
        </div>`;
      document.body.appendChild(backdrop);

      const ok = backdrop.querySelector(`.premium-confirm-ok`);
      const cancel = backdrop.querySelector(`.premium-confirm-cancel`);
      const close = (value) => {
        backdrop.style.opacity = `0`;
        window.setTimeout(() => backdrop.remove(), 160);
        resolve(value);
      };

      ok.focus();
      ok.addEventListener(`click`, () => close(true));
      cancel.addEventListener(`click`, () => close(false));
      backdrop.addEventListener(`click`, (event) => {
        if (event.target === backdrop) close(false);
      });
      document.addEventListener(`keydown`, function onKey(event) {
        if (!document.body.contains(backdrop)) {
          document.removeEventListener(`keydown`, onKey);
          return;
        }
        if (event.key === `Escape`) {
          document.removeEventListener(`keydown`, onKey);
          close(false);
        }
      });
    });
  };

  function escapeHTML(value) {
    return String(value)
      .replaceAll(`&`, `&amp;`)
      .replaceAll(`<`, `&lt;`)
      .replaceAll(`>`, `&gt;`)
      .replaceAll(`"`, `&quot;`)
      .replaceAll(`'`, `&#039;`);
  }

  function enhanceInteractiveElements() {
    document.querySelectorAll(`button:not([type])`).forEach((button) => button.setAttribute(`type`, `button`));
    document.querySelectorAll(`.lecture-card`).forEach((card) => {
      if (!card.classList.contains(`locked`)) {
        card.setAttribute(`tabindex`, `0`);
        card.setAttribute(`role`, `button`);
        card.addEventListener(`keydown`, (event) => {
          if (event.key === `Enter` || event.key === ` `) {
            const button = card.querySelector(`button:not([disabled])`);
            if (button) button.click();
          }
        });
      }
    });
  }

  document.addEventListener(`click`, (event) => {
    const themeButton = event.target.closest(`#themeBtn, #themeToggle, .theme-btn`);
    if (!themeButton) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const currentTheme = document.documentElement.getAttribute(`data-theme`) === `light` ? `light` : `dark`;
    applyTheme(currentTheme === `dark` ? `light` : `dark`);
  }, true);

  document.addEventListener(`DOMContentLoaded`, () => {
    requestAnimationFrame(() => document.body.classList.add(`premium-loaded`));
    enhanceInteractiveElements();
  });

  window.addEventListener(`load`, () => {
    document.body.classList.add(`premium-loaded`);
    enhanceInteractiveElements();
  });
})();
