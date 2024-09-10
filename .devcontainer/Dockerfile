FROM node:20-bookworm-slim

# Set one or more individual labels
LABEL feelppdoc.lncmi.version="0.0.1"
LABEL vendor1="Lncmi"
LABEL feelppdoc.lncmi.release-date="2024-05-09"
LABEL feelppdoc.lncmi.is-production=""

USER root
ENV NODE_PATH=/usr/local/share/.config/yarn/global/node_modules

# Setup demo environment variables
ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    OMPI_MCA_btl_vader_single_copy_mechanism=none

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. On Linux, the container user's GID/UIDs
# will be updated to match your local UID/GID (when using the dockerFile property).
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=vscode
ARG USER_UID=1001
ARG USER_GID=$USER_UID

RUN apt update && \
    apt -y install openssh-client wget curl findutils jq yq coreutils bash-completion locate apt-file && \
    apt -y install git git-lfs git emacs-nox vim-nox && \
    updatedb && \
    apt-file update

# needed for playwright
RUN apt -y install libglib2.0-0 libnss3  libnspr4 \
    libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2  libgbm1 libpango-1.0-0 libcairo2 \
    libx11-xcb1 libxcursor1 libgtk-3-0 libpangocairo-1.0-0 libcairo-gobject2 libgdk-pixbuf-2.0-0 libflite1 libgles2 libxslt1.1 libgstreamer-plugins-base1.0-0 \
    libwoff1 libgstreamer-gl1.0-0 libharfbuzz-icu0 libmanette-0.2-0 libgstreamer-plugins-bad1.0-0 libvpx7 libhyphen0 libwebpdemux2 libsecret-1-0 libenchant-2-2 gstreamer1.0-libav

# Create a non-root user to use if preferred - see https://aka.ms/vscode-remote/containers/non-root-user.\
RUN groupadd --gid $USER_GID $USERNAME && \
    useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME && \
    # [Optional] Add sudo support for the non-root user
    apt-get install -y sudo lsb-release && \
    echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
    chmod 0440 /etc/sudoers.d/$USERNAME && \
    # add github ssh key
    mkdir -p ~$USERNAME/.ssh/ && \
    ssh-keyscan github.com >> ~$USERNAME/.ssh/known_hosts && \
    chown -R $USER_UID.$USER_GID ~$USERNAME/.ssh

USER $USERNAME
# RUN npm install && \
#    npm  i -D playwright-chromium


# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog

# EXPOSE 2020
# EXPOSE 35729
