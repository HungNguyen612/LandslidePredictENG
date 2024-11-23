        // Translations
        const translations = {
            en: {
                "main-title": "Landslide Prediction",
                "forecast-info": "Forecast Information",
                "temperature": "Temperature:",
                "humidity": "Humidity:",
                "rain": "Rainfall:",
                "location": "Measurement Location:",
                "slope": "Slope:",
                "vegetation": "Vegetation Cover:",
                "landslide-risk": "Landslide Risk:",
                "footer": "&copy; 2024 LandslideAlert. All rights reserved."
            },
            vn: {
                "main-title": "Dự đoán sạt lở đất",
                "forecast-info": "Thông tin dự báo",
                "temperature": "Nhiệt độ:",
                "humidity": "Độ ẩm:",
                "rain": "Lượng mưa:",
                "location": "Vị trí đo:",
                "slope": "Độ dốc:",
                "vegetation": "Độ phủ thực vật:",
                "landslide-risk": "Khả năng sạt lở đất:",
                "footer": "&copy; 2024 LandslideAlert. Tất cả các quyền được bảo lưu."
            }
        };

        // Language toggle
        const toggleButton = document.getElementById('language-toggle');
        let currentLanguage = 'vn'; // Default language

        toggleButton.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'vn' ? 'en' : 'vn';
            updateLanguage();
            console.log("Button pressed");
        });

        // Function to update language
        function updateLanguage() {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                element.innerHTML = translations[currentLanguage][key];
            });
        }
