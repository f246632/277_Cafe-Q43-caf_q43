/**
 * Gallery JavaScript for Café Q43 Website
 * Handles image lightbox and gallery interactions
 */

(function() {
    'use strict';

    // ============================
    // Lightbox Modal
    // ============================

    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Schließen">&times;</button>
            <button class="lightbox-prev" aria-label="Vorheriges Bild">‹</button>
            <img src="" alt="" class="lightbox-image">
            <button class="lightbox-next" aria-label="Nächstes Bild">›</button>
            <div class="lightbox-caption"></div>
        </div>
    `;

    // Add lightbox styles
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .lightbox.active {
            display: flex;
            opacity: 1;
        }

        .lightbox-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
        }

        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .lightbox-image {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }

        .lightbox-close,
        .lightbox-prev,
        .lightbox-next {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            font-size: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
        }

        .lightbox-close {
            top: 20px;
            right: 20px;
            font-size: 2.5rem;
        }

        .lightbox-prev {
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .lightbox-next {
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        .lightbox-close:hover,
        .lightbox-prev:hover,
        .lightbox-next:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-50%) scale(1.1);
        }

        .lightbox-close:hover {
            transform: scale(1.1);
        }

        .lightbox-caption {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 1rem;
            max-width: 80%;
            text-align: center;
        }

        @media (max-width: 767px) {
            .lightbox-close,
            .lightbox-prev,
            .lightbox-next {
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
            }

            .lightbox-close {
                top: 10px;
                right: 10px;
            }

            .lightbox-prev {
                left: 10px;
            }

            .lightbox-next {
                right: 10px;
            }

            .lightbox-caption {
                font-size: 0.9rem;
                padding: 8px 15px;
                bottom: 10px;
            }
        }

        /* Loading animation */
        .lightbox-image {
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* Keyboard focus styles */
        .lightbox-close:focus,
        .lightbox-prev:focus,
        .lightbox-next:focus {
            outline: 3px solid #8B4513;
            outline-offset: 2px;
        }
    `;

    document.head.appendChild(lightboxStyles);
    document.body.appendChild(lightbox);

    // Get lightbox elements
    const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');

    // Gallery images
    let galleryImages = [];
    let currentImageIndex = 0;

    // Initialize gallery
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            const title = item.querySelector('.gallery-title');

            if (img) {
                galleryImages.push({
                    src: img.src,
                    alt: img.alt,
                    title: title ? title.textContent : ''
                });

                // Add click event
                item.addEventListener('click', () => {
                    openLightbox(index);
                });

                // Add keyboard support
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'button');
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                    }
                });
            }
        });
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus on close button for accessibility
        setTimeout(() => lightboxClose.focus(), 100);
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update lightbox image
    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        if (image) {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.title || image.alt;

            // Show/hide navigation buttons
            if (galleryImages.length <= 1) {
                lightboxPrev.style.display = 'none';
                lightboxNext.style.display = 'none';
            } else {
                lightboxPrev.style.display = 'flex';
                lightboxNext.style.display = 'flex';
            }
        }
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                nextImage();
            } else {
                // Swipe right - previous image
                prevImage();
            }
        }
    }

    // Prevent scrolling on lightbox image
    lightboxImage.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });

    // ============================
    // Image Lazy Loading Enhancement
    // ============================

    function enhanceLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        images.forEach(img => {
            img.addEventListener('load', () => {
                img.style.animation = 'fadeIn 0.3s ease';
            });

            // Error handling
            img.addEventListener('error', () => {
                img.style.opacity = '0.5';
                console.error(`Failed to load image: ${img.src}`);
            });
        });
    }

    // ============================
    // Initialize
    // ============================

    window.addEventListener('DOMContentLoaded', () => {
        initGallery();
        enhanceLazyLoading();
    });

    // Re-initialize if images are dynamically added
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.classList && node.classList.contains('gallery-item')) {
                        initGallery();
                    }
                });
            }
        });
    });

    const gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        observer.observe(gallerySection, {
            childList: true,
            subtree: true
        });
    }

})();
