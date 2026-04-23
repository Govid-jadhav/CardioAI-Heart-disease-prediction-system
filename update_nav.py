import glob
import shutil
import os

# Step 1: Backup folder (important)
backup_dir = "templates_backup"
os.makedirs(backup_dir, exist_ok=True)

for f in glob.glob('templates/*.html'):
    # Backup file
    shutil.copy(f, os.path.join(backup_dir, os.path.basename(f)))

    # Read file
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace old pattern with safe first-name logic
    content = content.replace(
        "Hi, {{ session.get('user_name')[:10] }}!",
        "Hi, {{ (session.get('user_name') or 'User').split()[0] }}!"
    )

    # Write updated content
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("✅ All templates updated successfully with first name logic!")
print("📁 Backup created in 'templates_backup' folder.")