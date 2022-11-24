function setup() {
    randomSeed(fxrand()*3000) //help
    print(fxhash)
    isPreview = window.navigator.userAgent.indexOf("HeadlessChrome") > -1;
    // noSmooth()
    // print(fxhash)
    screen = [windowWidth, windowHeight]
    // let screen = [800, 800]
    Adcanvas = sort(screen, 0)
    // print(Adcanvas[0])
    realCanvas = Adcanvas[1]
   




    pixelDensity(2)


    noiseSeed(map(fxrand(), 0, 1, 0, 100000))


    queryString = window.location.search
    urlParams = new URLSearchParams(queryString)
    res = urlParams.get("res")
    if(null == res) { 
    // print("null")
    pixelDensity(2)
    }
    if(res==0.5||res==1||res==2||res==4){
        pixelDensity(float(res))
    }else{
        pixelDensity(2)
    }

    

    üyH = []
    üydraw = 0
    cardraw = 0
    carhue = 0
    carlig = 0
    tHue = 0
    tSat = 0
    tLig = 0
    axC = 0
    kpay = 2
    trainB = 0
    jig = 0
    kald = 0
    cüstüt1 = 0
    hm = 0
    dv1 = 0
    dv2 = 0
    makeCar = 0
    dr1 = []
    dr2 = []
    div1 = 0
    div2 = 0
    raAraYol = 0
    raAnaYol = 0
    raDere = 0
    üstyolH = 10
    csab = 0
    dereX = 0
    dereY = 0
    parkyolX = 0
    parkyolY = 0
    inside=0
    lamb=0
    pdfac=pixelDensity()
    fr=0
    totclick=0



    arayol = 10.1
    anayol = 20.2 //20.2
    üstyol = 20.1
    parkyol = 40.4
    dere = 40.3
    deniz = 600
    parkYolprob = rand(0.02, 0.12)//rand(0.02, 0.07)
    dereP = rand(0.02, 0.17) //rand(0.03, 0.10)//0.1
    if (det(0.5)) {
        dereX = 1
    } else {
        dereY = 1
    }
    if (det(0.1)) {
        dereX = 1
        dereY = 1
        dereP = dereP / 2
    }

    if (det(0.5)) {
        parkyolX = 1
    } else {
        parkyolY = 1
    }
    if (det(0.1)) {
        parkyolX = 1
        parkyolY = 1
        parkYolprob = parkYolprob / 2
    }

    arayolR = [2, 6]
    anayolR = [5, 9]
    dereR = [15, 40]
    parkyolR = [15, 40]
    magzoom = 300
    magRec = 800
    dnz1 = 0 //det(0.5)
    dnz2 = 0 //det(0.5)
    bcol = 180
    cORp = 0.65
    sL = random([-1, 1])
    bcol2 = bcol + rand(20, 60) //*sL
    shaderand = rand(40, 60)
    üyMinH = 10 //5
    üyProb = bias(0.1, 0.5, 10, 0.24, 1.4) //rand(0.1, 0.3) //0.2
    // print("üyprob", üyProb)
    üystart = 13 //7
    üyend = 35 // 35 //42 //30 rand olabilir
    ortho = det(0.75)
    bw = det(0.37)
    suf = det(0.5)
    zoom = bias(5, 11, 6, 11, 1.5) //rand(5, 11) //4
    rotX = -bias(50, 70, 10, 67, 1.4) //rand(-50, -70)
    rotZ = bias(15, 75, 10, 45, 1.2) //rand(15, 75)
    // zoom = 11 //3.5
    


    roadD = 1
    dbw = 0
    dbp = 0
    dbj = 0
    dbpep = 0
    //boş
    // roadD = 0
    dbw = 1
    dbp = 1
    dbj = 1
    // dbpep = 1
    // üyProb = 0
    //

    hueRrange = rand(20, 60)
    hueStart = rand(0, 360 - hueRrange)
    colChange = det(0.5)
    // rotX = -65
    // rotZ = 15
    pallet=random(colP)
    shuffleArray(pallet)
    wwc=pallet[2]
    bcol4=pallet[3]
    // print("palet",pallet)
    cfark = bias(10, 50, 10, 30, 1.4) //rand(10,60)
    // cmin=rand(25+cfark,125-cfark)
    // cmax=rand(125+cfark,255-cfark)

    coldif = bias(20, 170, 10, 90, 1.5) //rand(50,200)
//30-225   75-55
    cmin = rand(25 + cfark, 255 - cfark - coldif)
    // cmin = bias(25 + cfark, 255 - cfark - coldif,10,190,1.3)
    cmax = cmin + coldif

    if (colChange) {
        cmax2 = cmax
        cmin2 = cmin

        cmax = cmin2
        cmin = cmax2
    }
    // cmin=40//rand(25+cfark,255-cfark-coldif)
    // cmax=220//cmin+coldif

    // print(int(cmin), int(cmax))

    if(det(0.5)){
        canvas = 1600 //int((Adcanvas[0]))800
        canvas2=1200//600
        asp="3:4"
        }else{
        canvas = 1200 //int((Adcanvas[0]))
        canvas2 = 1600 //600
        asp="4:3"
        }
        if(!ortho){
        canvas = 1200 //int((Adcanvas[0]))
        canvas2 = 1600 //600
        asp="16:9"
        }
        print("Canvas:", pixelDensity() * canvas + "x" + pixelDensity() * canvas2)


        // if(zoom<9||rotX>-63||!ortho||üyProb<0.28||asp!="3:4"){//suf||bw||
        //     location.reload()
        // }

    // setAttributes('antialias', true);
    // smooth()
    r = createGraphics(canvas2, canvas, WEBGL)
    d = createGraphics(200, 200)
    h = createGraphics(200, 200)
    h.colorMode(HSL, 360, 100, 255)
    if(!ortho){
        can=createCanvas(canvas2, 900)
    }else{
        can=createCanvas(canvas2, canvas)
    }
    drawingContext.imageSmoothingEnabled = true
    drawingContext.imageSmoothingQuality = 'high'
    schance()
    // createCanvas(600, canvas)
    // setAttributes("antialias", true);
    // background(240)
    r.angleMode(DEGREES)

    peopleARR()


    r.textureWrap(MIRROR, MIRROR)
    // r.textureMode(NORMAL);
    // rotX = -65
    // rotZ = 20

    // zoom = 0.8 
    // rotZ=0
    // rotX =0// -45
    // rotZ=45
    // rotX =-55// -45

     //debug
    

    if (ortho) {

        r.ortho(-width / zoom, width / zoom, height / zoom, -height / zoom, 0.0001, 100000);

        r.rotateX(rotX) //-60
        r.rotateZ(rotZ) //45
    } else {
        zoom=11
        // print(r.drawingContext.getTransform())
        //-60 ile iyi rotx
        fovP=50
        // r.perspective(fovP, canvas2/canvas, 0.00001, 100000); //sonuna limiter koyunca buglı güzel oluyo
        r.camera(0, 0, (1200/2) / tan(PI/6), 0, 0, 0, 0, 1, 0)
        r.perspective(fovP, canvas2/canvas); //sonuna limiter koyunca buglı güzel oluyo
        // r.translate(-200,-200,0)
        is70=det(0.5)
        if(is70){
            rotX = -70//-rand(50,60)//60//35
            r.translate(0,-57,450)
        }else{
            rotX = -60//60//35
            r.translate(0,rand(0,-100),450)
        }
        
        // r.translate(0,map(rotX,-50,-60,-200,-150),450)
        // r.translate(0,-50,450)
        r.rotate(180)
        // r.rotateX(rotX) //-60
        r.rotateX(rotX) //-60
        r.rotateZ(rotZ) //45
        // print(r)
        // r.rotateZ(60) //45
    }
    getCol()

    scale = 2
    sw = pdfac / 2 * zoom / 5


    yolTex = createGraphics(1024, 1024) //canvas2, canvas)
    if (bw) {
        yolTex.background(max(cmin,cmax)) //200
        temy = 0
    } else {
        yolTex.background(roadc) //220
        // yolTex.background(h.color(hue(bcol), saturation(bcol), 220)) //220
        temy = 0 //50
    }
    // for (let t = 0; t < 50000; t++) {
    //     yolTex.stroke(rand(180, 255) - temy)
    //     let yolx = rand(0, 1024)
    //     let yoly = rand(0, 1024)
    //     // yolTex.strokeWeight(noise(yolx/50,yoly/50)*10 * sw)
    //     yolTex.strokeWeight(rand(0.3, 10) * sw)
    //     // if(det(noise(yolx/100,yoly/100))){
    //     yolTex.point(yolx, yoly)
    //     // }
    // }

    for (let t = 0; t < 10000; t++) {
        if (bw) {
            yolTex.stroke(h.color(hue(bcol), saturation(bcol), rand(max(cmin,cmax), max(cmin,cmax)-80)))//rand(100, 180)
        } else {
            yolTex.stroke(h.color(hue(roadc), saturation(roadc), lightness(roadc)-rand(0, lightness(roadc)/5*4)))
        }
        yolTex.strokeWeight(rand(0.3, 5) * 3)
        let yolx = rand(0, 1024)
        let yoly = rand(0, 1024)
        // if(det(noise(yolx/100,yoly/100))){
        yolTex.point(yolx, yoly)
        // }
    }


    parkTex = createGraphics(1024, 1024)
    if (bw) {
        parkTex.background(max(cmin,cmax)+10)//210
        // parkTex.background((lightness(bcol)+lightness(bcol2))/2)
    } else {
        // parkTex.colorMode(HSL, 360, 100, 100)
        // let nc = parkTex.color(36, 20, rand(40, 60))
        parkTex.background(trCol)
    }
    for (let t = 0; t < 100000; t++) {
        if (bw) {
            parkTex.stroke(rand(max(cmin,cmax), min(cmin,cmax)))//rand(50, 150)
        } else {
            // parkTex.colorMode(HSL, 360, 100, 100)
            // let nc = parkTex.color(112, 15, rand(40, 60))
            parkTex.stroke(h.color(hue(trCol), saturation(trCol), lightness(trCol)-rand(0, 50)))

        }
        parkTex.strokeWeight(rand(1, 5))
        let yolx = rand(0, 1024)
        let yoly = rand(0, 1024)
        if (det(noise(yolx / 100, yoly / 100))) {
            parkTex.point(yolx, yoly)
        }
    }


    bulTex = createGraphics(1024, 1024)
    // bulTex.background(240)
    for (let t = 0; t < canvas; t += 6) {
        bulTex.stroke(0)
        bulTex.strokeWeight(1)
        // bulTex.point(rand(0, canvas2), rand(0, canvas))

        bulTex.line(t, 0, t, canvas)
    }

    roofTex1 = createGraphics(256, 256) //200
    roofTex2 = createGraphics(256, 256)
    roofTex3 = createGraphics(256, 256)
    roofTex4 = createGraphics(256, 256)
    if(!ortho){
        // translate(0,-300)
        magRec = 700
    }

    mag = createGraphics(magRec, magRec)
    r.background(255)
    // randomSeed(fxhash)
    r.fill(255)
    r.stroke(0)


    for (let t = üystart; t < üyend; t += üyMinH) {
        append(üyH, t)
    }
    // print("üyh", üyH)
    
    // r.texture(yolTex)
    //anacadde aracadde deniz nehir blokpark  blok bina

    // coRandX(20, 10)
    // coRandY(10, 20)
    cbx=27
    cby=27
    if(det(0.5)){
        cbx=rand(30,17)
    }else{
        cby=rand(30,17)
    }
    if(det(0.05)){
        if(det(0.5)){
            coRandX(50, 10)
            coRandY(27, 10)
        }else{
            coRandX(27, 10)
            coRandY(50, 10)
        }
    }else{
        coRandX(27, 10) //55 / scale, 20 / scale
        coRandY(27, 10)//15,10
    }


    xüstyol(üystart, üyend)
    yüstyol(üystart, üyend)


    mapsize = 200 //80
    // mapsize = map(zoom, 5, 11, 80, 40) //80
    // hm = rand(-10, 0)
    // hm = rand(-10, 0)
    // hm = bias(-150,0,100,0,1.4)



    dr1sum = 0
    dr2sum = 0

    for (let x = 0; x < mapsize + 1; x++) {
        dr1sum += dr1[x + 1]
    }
    for (let x = 0; x < mapsize + 1; x++) {
        dr2sum += dr2[x + 1]
    }

    // print("dr1sum", dr1sum)

    
    r.translate(-dr1sum / 2, -dr2sum / 2)
    var hit = false
    poly = []
    ncord = []
    midx = dr1sum / 2
    midy = dr2sum / 2
    if(ortho){
    hatapayı = map(zoom, 5, 11, 1.1, 1.4)
    prx = canvas / zoom * map(-rotX, 50, 70, 1.7, 3) * hatapayı
    pry = canvas2 / zoom * hatapayı
    // poly[0] = createVector(midx, midy-pr)
    // poly[1] = createVector(midx+pr, midy)
    // poly[2] = createVector(midx, midy+pr)
    // poly[3] = createVector(midx-pr, midy)

    ncord[0] = [-prx, -pry]
    ncord[1] = [prx, -pry]
    ncord[2] = [prx, pry]
    ncord[3] = [-prx, pry]

    poly[0] = createVector(midx + ncord[0][0] * r.cos(90 - rotZ) - ncord[0][1] * r.sin(90 - rotZ), midy + ncord[0][1] * r.cos(90 - rotZ) + ncord[0][0] * r.sin(90 - rotZ))
    poly[1] = createVector(midx + ncord[1][0] * r.cos(90 - rotZ) - ncord[1][1] * r.sin(90 - rotZ), midy + ncord[1][1] * r.cos(90 - rotZ) + ncord[1][0] * r.sin(90 - rotZ))
    poly[2] = createVector(midx + ncord[2][0] * r.cos(90 - rotZ) - ncord[2][1] * r.sin(90 - rotZ), midy + ncord[2][1] * r.cos(90 - rotZ) + ncord[2][0] * r.sin(90 - rotZ))
    poly[3] = createVector(midx + ncord[3][0] * r.cos(90 - rotZ) - ncord[3][1] * r.sin(90 - rotZ), midy + ncord[3][1] * r.cos(90 - rotZ) + ncord[3][0] * r.sin(90 - rotZ))
    }else{
        hatapayı = 30/fovP*2//map(zoom, 5, 11, 1.1, 1.4)
        if(is70){
            prx = canvas / 11 * hatapayı*5//*map(rotX,-50,-60,1.3,2)
            pry = canvas2 / 100 * hatapayı*1.6//*map(rotX,-50,-60,1.3,2)
            persacı=750//430
        }else{
            prx = canvas / 15 * hatapayı*5//*map(rotX,-50,-60,1.3,2)
            pry = canvas2 / 20 * hatapayı*1.6//*map(rotX,-50,-60,1.3,2)
            persacı=500//430
        }

    ncord[0] = [-prx, -pry]
    ncord[1] = [prx, -pry-persacı]
    ncord[2] = [prx, pry+persacı]
    ncord[3] = [-prx, pry]

    poly[0] = createVector(midx + ncord[0][0] * r.cos(90 - rotZ) - ncord[0][1] * r.sin(90 - rotZ), midy + ncord[0][1] * r.cos(90 - rotZ) + ncord[0][0] * r.sin(90 - rotZ))
    poly[1] = createVector(midx + ncord[1][0] * r.cos(90 - rotZ) - ncord[1][1] * r.sin(90 - rotZ), midy + ncord[1][1] * r.cos(90 - rotZ) + ncord[1][0] * r.sin(90 - rotZ))
    poly[2] = createVector(midx + ncord[2][0] * r.cos(90 - rotZ) - ncord[2][1] * r.sin(90 - rotZ), midy + ncord[2][1] * r.cos(90 - rotZ) + ncord[2][0] * r.sin(90 - rotZ))
    poly[3] = createVector(midx + ncord[3][0] * r.cos(90 - rotZ) - ncord[3][1] * r.sin(90 - rotZ), midy + ncord[3][1] * r.cos(90 - rotZ) + ncord[3][0] * r.sin(90 - rotZ))
    
    }


    if(bw){
        pColor="B&W"
    }else{
        if(suf){
            pColor="Shuffled Color Palette"
        }else{
            pColor="Color Palette"
        }
    }

    if(ortho){
        pView="Orthographic"
    }else{
        pView="Perspective"
    }
    window.$fxhashFeatures = {
        "Color": pColor,
        "View": pView,
        "Zoom": 12-(round(zoom)),
        "AspectRatio": asp,
        "Horizantal Rotate": round(rotZ)-45,
        "Vertical Rotate": -round(rotX),
        "Elevated Road Probability":round(üyProb,1)
    }
    print(window.$fxhashFeatures)

    // r.push()
    // for (div2 = 0; div2 <= mapsize; div2 += 1) { //yol çizgileri2
    //     div2coord = dr2c(div2) // - 200
    //     üstyolH = üyY[div2]
    //     road(0, div2coord, dr2[div2 + 1], 1)
    // }
    // r.pop()

    // r.push()
    // for (div1 = 0; div1 <= mapsize; div1 += 1) { //yol çizgileri2
    //     div1coord = dr1c(div1) // - 200
    //     üstyolH = üyX[div1]
    //     road(div1coord, 0, dr1[div1 + 1], 0)
    // }
    // r.pop()


    // print("fin", millis() / 1000)
    div1 = 0
    finish = 0
    frc=0
    div2=0

}

function draw() {
    if(fr==0){
        if(frc<= mapsize){
            // print("wo")
            div2coord = dr2c(frc) // - 200
            üstyolH = üyY[frc]
            r.push()
            road(0, div2coord, dr2[frc + 1], 1)
            axC = 0
            r.pop()
            frc++
        }
        else{
        fr=1
        }
    }
    // noLoop()
    if (div1 <= mapsize) {
        div1coord = dr1c(div1) // - 200
        
        r.push()
        üstyolH = üyX[div1]
        road(div1coord, 0, dr1[div1 + 1], 0)
        r.pop()
        

        for (div2 = 0; div2 <= mapsize; div2 += 1) {
            div2coord = dr2c(div2) // - 200

            if(!ortho){
                dd=dist(div1coord,div2coord,0,0)
                // lScale=map(dd,0,500,1,0.01)
                lScale=1000/dd
                sw = pdfac / 2 * zoom / 5*lScale
                // print(sw)
                
            }

            hit = collidePointPoly(div1coord, div2coord, poly)
            if (!hit) {//&& ortho
                continue
            }

            
            getCol()

            // bcol =  180 + hm
            // bcol2 = 180 + shaderand +hm
            // bcol3 = bcol2 + 10
            // roadc = 220

            if (dr1[div1 + 1] == deniz || dr2[div2 + 1] == deniz) { //deniz
                r.push()
                // r.translate(0, 0, -5)
                // r.strokeWeight(0 * sw)
                // r.fill(bcol3)
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.pop()
            } else

            if (dr1[div1 + 1] == arayol || dr2[div2 + 1] == arayol) { //road//if ((div1coord ) % 2 == 1&&(div2coord ) % 2 == 1) { //if(det(0.2)){//
                r.strokeWeight(0 * sw)
                // r.textureWrap(REPEAT, REPEAT)
                r.texture(yolTex)
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                rectuvmap(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                // r.fill(roadc)
                for (let t = 0; t < 5; t++) {
                    r.push()
                    people(rand(div1coord, div1coord + dr1[div1 + 1]), rand(div2coord, div2coord + dr2[div2 + 1]))
                    r.pop()
                }
            } else if (dr1[div1 + 1] == anayol || dr2[div2 + 1] == anayol) { //road//if ((div1coord ) % 2 == 1&&(div2coord ) % 2 == 1) { //if(det(0.2)){//
                r.strokeWeight(0 * sw)
                r.texture(yolTex)
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                rectuvmap(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.fill(roadc)
                for (let t = 0; t < 10; t++) {
                    r.push()
                    people(rand(div1coord, div1coord + dr1[div1 + 1]), rand(div2coord, div2coord + dr2[div2 + 1]))
                    r.pop()
                }
            } else if ((dr1[div1 + 1] + "").split(".")[1] == 3 || (dr2[div2 + 1] + "").split(".")[1] == 3) { //road//if ((div1coord ) % 2 == 1&&(div2coord ) % 2 == 1) { //if(det(0.2)){//
                r.push()
                // r.translate(0, 0, -5)

                r.strokeWeight(0.25 * sw)
                r.noFill()
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.fill(255)
                jig = 1
                rectB(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1], 1, 0, 0)
                jig = 0
                r.translate(0, 0, -5)
                r.strokeWeight(0 * sw)
                r.fill(255)
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.pop()
            } else if ((dr1[div1 + 1] + "").split(".")[1] == 4 || (dr2[div2 + 1] + "").split(".")[1] == 4) {

                // kald = 1
                // rectB(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1], 0.3, 0, 1, 0)
                // kald = 0
                // r.push()
                // r.translate(0,0,0.32)
                // park(div1coord + kpay, div2coord + kpay, dr1[div1 + 1] - kpay * 2, dr2[div2 + 1] - kpay * 2)
                // r.pop()
                //parkyol

                // rectB(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1],0.3,0,0,0)
                // r.push()
                // r.translate(0, 0, 0.32)
                park(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                // r.pop()
            } else if (det(0.1)) { //park slow
                // r.strokeWeight(1.5 / scale * sw)
                kald = 1
                rectB(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1], 0.3, 0, 1, 0)
                kald = 0
                r.push()
                r.translate(0, 0, 0.32)
                park(div1coord + kpay, div2coord + kpay, dr1[div1 + 1] - kpay * 2, dr2[div2 + 1] - kpay * 2)
                r.pop()

                park(div1coord + kpay, div2coord + kpay, dr1[div1 + 1] - kpay * 2, dr2[div2 + 1] - kpay * 2)

            } else {
                // rectB(div1, div2, dr1[div1], dr2[div2],rand(20,40))
                r.strokeWeight(0.1 * sw)
                r.fill(180)
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                kald = 1
                rectB(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1], 0.3, 0, 1, 0)
                kald = 0

                r.push()
                //lamba,
                lamb=1
                r.strokeWeight(0.3*sw)
                rectB(div1coord+dr1[div1 + 1]/3*1, div2coord+1, 0.3, 0.3, 7, 0, 1, 0)
                rectB(div1coord+dr1[div1 + 1]/3*1-0.2, div2coord+1-0.2, 0.5, 0.5, 1, 7, 1, 0)

                rectB(div1coord+dr1[div1 + 1]/3*2, div2coord+1, 0.3, 0.3, 7, 0, 1, 0)
                rectB(div1coord+dr1[div1 + 1]/3*2-0.2, div2coord+1-0.2, 0.5, 0.5, 1, 7, 1, 0)

                rectB(div1coord+1, div2coord+dr2[div2 + 1]/3*1, 0.3, 0.3, 7, 0, 1, 0)
                rectB(div1coord+1-0.2, div2coord+dr2[div2 + 1]/3*1-0.2, 0.5, 0.5, 1, 7, 1, 0)

                rectB(div1coord+1, div2coord+dr2[div2 + 1]/3*2, 0.3, 0.3, 7, 0, 1, 0)
                rectB(div1coord+1-0.2, div2coord+dr2[div2 + 1]/3*2-0.2, 0.5, 0.5, 1, 7, 1, 0)
                lamb=0
                r.pop()

                r.push()

                for (let p = 0; p < 15; p++) {
                    r.push()
                    if (det(0.5)) {
                        if (det(0.5)) {
                            kpx = rand(div1coord, div1coord + kpay)
                        } else {
                            kpx = rand(div1coord + dr1[div1 + 1], div1coord + dr1[div1 + 1] - kpay)
                        }
                        kpy = rand(div2coord, div2coord + dr2[div2 + 1])
                    } else {
                        if (det(0.5)) {
                            kpy = rand(div2coord, div2coord + kpay)
                        } else {
                            kpy = rand(div2coord + dr2[div2 + 1], div2coord + dr2[div2 + 1] - kpay)
                        }
                        kpx = rand(div1coord, div1coord + dr1[div1 + 1])
                    }
                    //people(rand(div1coord, div1coord + dr1[div1 + 1]), rand(div2coord, div2coord + dr2[div2 + 1]))
                    kpeople(kpx, kpy)
                    r.pop()
                }
                // upval = rand(10, 40) / scale
                if (dr1[div1 + 1] == üstyol || dr2[div2 + 1] == üstyol) {
                    // upval=üstyolH/100*90
                    // upval = bias(5, üstyolH/100*90, 100, 10, 1.6) / scale
                    // min(üyX[div1],üyY[div2])
                    upval = rand(4, min(üyX[div1], üyY[div2]) / 100 * 70)
                } else {
                    upval = bias(10, 140, 140, 10, 1.4) / scale * map(noise(div1coord / 50, div2coord / 50), 0, 1, 0.5, 1)
                    // upval =rand(6,17)//alçak ev
                    // upval = map(noise(div1coord/50,div2coord/50),0,1,10,60)//*bias(0.8, 1.5, 20, 1.5, 1.4) / scale
                    // upval = bias(10, 20, 10, 10, 1.6)
                }

                r.pop()

                r.push()
                r.translate(0, 0, 0.3)
                build(div1coord + kpay, div2coord + kpay, dr1[div1 + 1] - kpay * 2, dr2[div2 + 1] - kpay * 2)
                r.pop()
                


            }

            if (dr1[div1 + 1] == üstyol) {
                üydraw = 1
                üstyolH = üyX[div1]
                r.push()
                r.translate(0, 0, üstyolH)
                let ksize = 2 //2
                r.strokeWeight(0 * sw)
                r.push()
                r.colorMode(HSL, 360, 100, 255)
                roadc = r.color(hue(roadc), saturation(roadc), lightness(roadc) - 15 + üstyolH / 2.7) //220
                r.pop()
                r.fill(roadc) //220
                r.texture(yolTex)
                rectuvmap(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.push()
                r.translate(0, 0, -üstyolH * 1.2 - 0.5)
                jig = 1
                csab = 1
                getCol()
                rectB(div1coord + üstyol / 2 - ksize / 2, div2coord + üstyol / 2 - ksize / 2, ksize, ksize, üstyolH * 1.2, 0)
                csab = 0
                jig = 0
                r.pop()
                // rectB(div1coord + üstyol / 8 - ksize/2, div2coord + üstyol / 2 - ksize/2, ksize, ksize, -üstyolH * 4, 0)
                // rectB(div1coord + üstyol / 8*7 - ksize/2, div2coord + üstyol / 2 - ksize/2, ksize, ksize, -üstyolH * 4, 0)

                // r.fill(240)

                for (let t = 0; t < 10; t++) {
                    r.push()
                    people(rand(div1coord, div1coord + dr1[div1 + 1]), rand(div2coord, div2coord + dr2[div2 + 1]))
                    r.pop()
                }
                r.pop()
                üsdraw = 0
            }

            if (dr2[div2 + 1] == üstyol) {
                üydraw = 1
                üstyolH = üyY[div2]
                r.push()
                r.translate(0, 0, üstyolH)
                r.strokeWeight(0 * sw)

                r.push()
                r.colorMode(HSL, 360, 100, 255)
                roadc = r.color(hue(roadc), saturation(roadc), lightness(roadc) - 15 + üstyolH / 2.7) //220
                r.pop()
                r.fill(roadc) //220
                r.texture(yolTex)
                // tree(div1coord + üstyol / 2 - 1, div2coord + üstyol / 2 - 1,10)
                // r.push()
                // r.strokeWeight(3 / scale * sw)
                // r.line(div1coord + üstyol / 2 - 1, div2coord + üstyol / 2 - 1,0,div1coord + üstyol / 2 - 1, div2coord + üstyol / 2 - 1,5)
                // r.pop()
                rectuvmap(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                // r.rect(div1coord, div2coord, dr1[div1 + 1], dr2[div2 + 1])
                r.push()
                r.translate(0, 0, -üstyolH * 1.2 - 0.5)
                jig = 1
                csab = 1
                getCol()
                rectB(div1coord + üstyol / 2 - 1, div2coord + üstyol / 2 - 1, 2, 2, üstyolH * 1.2, 0)
                csab = 0
                jig = 0
                r.pop()
                // r.fill(240)

                for (let t = 0; t < 10; t++) {
                    r.push()
                    people(rand(div1coord, div1coord + dr1[div1 + 1]), rand(div2coord, div2coord + dr2[div2 + 1]))
                    r.pop()
                }
                r.pop()
                üydraw = 0
            }

        }
        div1++
    } else {
        if (finish == 0&&fr==1) {
            finish = 1
        }

    }


    if (finish == 1) {
        print("fin", millis() / 1000)
        finish = 2
        fxpreview()

        // setTimeout(function () {
        //     location.reload();
        // }, 3000)
        // saveCanvas(fxhash, 'png')

    }






    background(0)
    if(!ortho){
        translate(0,-300)
    }
    image(r, 0, 0)
    // filter(INVERT)
    // image(yolTex,0,0)

    // if(mouseX>10&&mouseY>10){

    //     aa=copy(r,200,200,100,100,0,0,200,200)
    //     // translate(mouseX,mouseY)
    //     image(aa,mouseX,mouseY)
    //     // mask(r)
    //     // circle(mouseX,mouseY,100)
    // }

    // print(mouseX,mouseY)
    can.mouseOut(function sss(){inside=0})
        can.mouseOver(function sss2(){inside=1})

    if (finish&&(totclick%3)!=0) {
        // rectMode(CENTER)
        if(!ortho){
            canvas = 1200 //int((Adcanvas[0]))
            canvas2 = 1600 //600
        }
        mag.background(0)
        disableTrash = 10
        if(totclick%3==1){
            magzoom = 400
        }else if(totclick%3==2){
            magzoom = 200
        }
        
        // inside=0
        // print(mouseX,mouseY)
        // newx=abs(windowWidth-canvas2)/2
        // newy=abs(windowHeight-canvas)/2
        
        // print(inside)
        // print(newx)
        // print("winMouseX",winMouseX)
        // print("mouseX",mouseX)
        if (inside) {
            
            if(ortho){
            mag.copy(r, mouseX - (magzoom / 2) - canvas2 / 2, mouseY - (magzoom / 2) - canvas / 2, magzoom, magzoom, 0, 0, magRec, magRec)
            push()
            drawingContext.shadowBlur = 70
            drawingContext.shadowColor = color(0, 0, 0, 250)
            image(mag, mouseX - magRec / 2, mouseY - magRec / 2)
            pop()
            }else{
                mag.copy(r, mouseX - (magzoom / 2) - canvas2 / 2, mouseY+300 - (magzoom / 2) - canvas / 2, magzoom, magzoom, 0, 0, magRec, magRec)
                push()
                drawingContext.shadowBlur = 70
                drawingContext.shadowColor = color(0, 0, 0, 250)
                image(mag, mouseX - magRec / 2, mouseY+300 - magRec / 2)
                pop()  
            }
            // textSize(60)
            // text(int(mouseX)+","+int(mouseY), mouseX, mouseY)
        }

    }


    // if (mouseIsPressed === true) {
    //     if (mouseButton === CENTER) {
    //         location.reload();
    //     }
    // }

    

}

function rand(x, y) {
    return map(fxrand(), 0, 1, x, y)
}

function mouseReleased() {
    if (mouseButton === LEFT) {
        can.mouseOut(function sss(){inside=0})
        can.mouseOver(function sss2(){inside=1})
        totclick++
        
    }
}

function keyPressed() {
    if (keyCode === 83) { //s
        print("s")
        image(r, 0, 0)
        saveCanvas(fxhash, 'png');
    }
}

function train(xc1, xc2, div) {
    trainB = 1
    for (şerit = 0; şerit < div; şerit++) {
        let part = (xc2 - xc1) / div
        x1 = part * şerit
        x2 = part * (şerit + 1)
        r.push()
        r.strokeWeight(0.2 * sw)
        let gen = x2 - x1
        rayx1 = gen / 8 * 2
        rayx2 = gen / 8 * 6
        r.translate(x1, 0)
        // r.line(rayx1,0,rayx1,len)
        // r.line(rayx2,0,rayx2,len)

        rectB(rayx1, 0, 0.3, len, 0.3, 0, 1)
        rectB(rayx2, 0, 0.3, len, 0.3, 0, 1)
        for (let rayG = 0; rayG < len; rayG += 1.5) {
            // r.line(rayx1,rayG,rayx2,rayG)
            rectB(rayx1, rayG, rayx2 - rayx1, 0.3, 0.3, -0.15, 1)
        }
        translate(0, 0, 0.3)

        // trainS=rand(600,1200)
        for (let u = rand(-200, 200); u < len; u++) {
            vagonC = rand(3, 7)
            vX = gen / 5 * 1
            vY = u
            vEn = gen / 5 * 3
            vBoy = 30
            vH = 4

            for (v = 0; v < vagonC; v++) {
                wWidth = rand(1.5, 3)
                wHeight = rand(3, 5)
                getCol()
                // tempCol(0,0,+rand(-70,0))
                // tempCol(0,0,-bias(0,70,10,0,1.5))
                rectB(vX, vY, vEn, vBoy, vH, 0, 1, 1) //vagon
                vY = vY + vBoy + 2
                rectB(vX + vEn / 2, vY, 0.5, -2, 0.5, 0, 1) //bağlantı
                // tempColDel()
            }
            u += vBoy * vagonC + rand(100, 300)
        }

        r.pop()
        jig = 1
        rectB(x1, 0, 0.5, len, 1.0, 0, 1)
        rectB(x2, 0, -0.5, len, 1.0, 0, 1)
        jig = 0
    }
    trainB = 0
}

function weightedRand(spec) {
    var i, j, table = [];
    for (i in spec) {
        // The constant 10 below should be computed based on the
        // weights in the spec for a correct and optimal table size.
        // E.g. the spec {0:0.999, 1:0.001} will break this impl.
        for (j = 0; j < spec[i] * 10; j++) {
            table.push(i);
        }
    }

    return int(table[Math.floor(fxrand() * table.length)])

}

function roadPeople(xc1, xc2) {
    let rpc = rand(len / 3, len / 1.5) * 1.5 * (xc2 - xc1) / 20
    // print(rpc)
    for (let t = 0; t < rpc; t++) {
        r.push()
        kpeople(rand(xc1, xc2), rand(0, len))
        r.pop()
    }
}


function car(xc1, xc2, div) {
    makeCar = 1
    // return
    for (şerit = 0; şerit < div; şerit++) {
        let part = (xc2 - xc1) / div
        x1 = part * şerit
        x2 = part * (şerit + 1)
        r.push()
        r.translate(0, 0, 0.4)
        r.strokeWeight(0.2 * sw)
        carEn = 2 * rand(0.8, 1.3)
        carBoy = 4 * rand(0.8, 1.3)
        carH = 1 * rand(0.7, 1.0)
        cYar = []
        count = adlen/rand(3, 10) //rand(100, 300)
        totalcar = 0
        for (let c = 0; c < count; c++) {
            carX = rand(x1 + carEn / 4, x2 - carEn - carEn / 4)
            carY = rand(0, len)
            carColl = 0
            for (val in cYar) {
                if (carY < cYar[val] + carBoy * 1.3 && carY > cYar[val] - carBoy * 1.3) {
                    carColl = 1
                    break
                }
            }
            if (carColl) {
                // print("next")
                continue
            } else {
                // tempCol(-hue(bcol)+rand(hue(bcol)-20, hue(bcol)+20 ), -saturation(bcol)/2, -lightness(bcol)+rand(0, 110))
                getCol()
                append(cYar, carY)
                rectB(carX, carY, carEn, carBoy, carH, 0, 1, 0)
                rectB(carX, carY + carBoy / 4, carEn, carBoy / 2, carH / 2, carH, 1, 0)

                r.push()
                r.translate(carX, carY + carBoy / 4)
                r.rotateY(90)
                r.fill(100)
                r.circle(0, 0, 0.8)
                r.pop()

                r.push()
                r.translate(carX, carY + carBoy / 4 * 3)
                r.rotateY(90)
                r.fill(100)
                r.circle(0, 0, 0.8)
                r.pop()

                r.push()
                r.translate(carX + carEn, carY + carBoy / 4)
                r.rotateY(90)
                r.fill(100)
                r.circle(0, 0, 0.8)
                r.pop()

                r.push()
                r.translate(carX + carEn, carY + carBoy / 4 * 3)
                r.rotateY(90)
                r.fill(100)
                r.circle(0, 0, 0.8)
                r.pop()

                tempColDel()
                totalcar++
            }
        }
        // print(totalcar)
        // print(cYar)
        r.pop()
        // r.strokeWeight(0.25 * sw) //0.5
        // dashed(x1+(x2-x1)/2, 0, x1+(x2-x1)/2, len, 150 * len / 800)
        // // dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
        // r.line(x1, 0, x1, len)
        // r.line(x2, 0, x2, len)
        // r.strokeWeight(0.25 * sw) //0.5

    }
    makeCar = 0
}
// function d1(x, y) {
//     dv1 = map(fxrand(), 0, 1, x, y)
//     return dv1
// }

// function d2(x, y) {
//     dv2 = map(fxrand(), 0, 1, x, y)
//     return dv2
// }

// function defrand(v,min,max){

//     this[eval(v)]=map(fxrand(), 0, 1, min, max)
// }
function dashed(x1, y1, x2, y2, count) {
    // for(let d=0;d<dist(x1, y1, x2, y2);d+=dist(x1, y1, x2, y2)/count){

    // }
    r.push()
    for (let d = 0; d < 1; d += 1 / count) {
        let nx1 = lerp(x1, x2, d)
        let ny1 = lerp(y1, y2, d)
        let nx2 = lerp(x1, x2, d + 1 / count / 2)
        let ny2 = lerp(y1, y2, d + 1 / count / 2)
        // r.line(nx1, ny1, nx2, ny2)   

        if(lightness(bcol4)<50&&!bw){
            r.stroke(255)
        }else{
            r.stroke(0)
        }
        r.strokeWeight(0.8 * sw)
        jLine(nx1, ny1, 0, nx2, ny2, 0, 0.6, 0.12)

    }
    r.pop()
    // r.line(x1, y1, x2, y2)
}

function xüstyol(ex, ey) {
    üyX = []
    for (let t = 0; t < 500; t++) {
        // append(üyX, rand(ex,ey))
        append(üyX, random(üyH))
    }
}

function yüstyol(ex, ey) {
    üyY = []
    for (let t = 0; t < 500; t++) {
        // append(üyY, rand(ex,ey))
        append(üyY, random(üyH) + üyMinH / 2)
    }
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}

function coRandX(x, y) {
    let arayolc = rand(0, arayolR[0])
    let anayolc = rand(0, anayolR[0])
    let derec = rand(0, dereR[0])
    let üstyolc = 0

    raAraYol = rand(arayolR[0], arayolR[1])
    raAnaYol = rand(anayolR[0], anayolR[1])
    raDere = rand(dereR[0], dereR[1])
    // defrand(raAnaYol,5, 9)
    // defrand(raDere,10, 15)
    // print(raAraYol)
    //deniz altyapı
    if (dnz1) {
        append(dr1, 1) //boş 1.
        append(dr1, deniz)
        append(dr1, arayol)
    }



    for (let t = 0; t < 1000; t++) {
        // print("app1")
        if (arayolc > raAraYol) { //arayol
            append(dr1, arayol)
            arayolc = 0
            raAraYol = rand(arayolR[0], arayolR[1])
        } else if (anayolc > raAnaYol && arayolc != 0) {
            append(dr1, anayol)
            // if (det(0.2)) {
            //     append(dr1, anayol)
            //     if (det(0.2)) {
            //         append(dr1, anayol)
            //     }
            // }
            anayolc = 0
            raAnaYol = rand(anayolR[0], anayolR[1])
        } else if (det(dereP) && dereX && anayolc != 0 && arayolc != 0) {
            // det(0.1)
            // derec > raDere
            append(dr1, arayol)
            append(dr1, randInt(dereR[0], dereR[1]) + 0.3)
            append(dr1, arayol)
            arayolc = 0
            anayolc = 0
            derec = 0
            // raDere = rand(dereR[0], dereR[1])
        } else if (det(üyProb) & üstyolc > 0) {
            append(dr1, üstyol)
            üstyolc = 0
        } else if (det(parkYolprob) && parkyolX) {
            append(dr1, arayol)
            append(dr1, randInt(parkyolR[0], parkyolR[1]) + 0.4)
            append(dr1, arayol)
        } else {
            append(dr1, randInt(x, y))
            arayolc += 1
            anayolc += 1
            derec += 1
            üstyolc += 1
        }
        // if(dnz3&&t==30){
        //     append(dr1, arayol)
        //     append(dr1, deniz)
        //     break
        // }
    }
}



function coRandY(x, y) {
    let arayolc = rand(0, arayolR[0])
    let anayolc = rand(0, anayolR[0])
    let derec = rand(0, dereR[0])
    let üstyolc = 0

    raAraYol = rand(arayolR[0], arayolR[1])
    raAnaYol = rand(anayolR[0], anayolR[1])
    raDere = rand(dereR[0], dereR[1])
    // defrand(raAnaYol,5, 9)
    // defrand(raDere,10, 15)
    // print(raAraYol)
    if (dnz2) {
        append(dr2, 1) //boş 1.
        append(dr2, deniz)
        append(dr2, arayol)
    }
    for (let t = 0; t < 1000; t++) {
        // print("app1")
        if (arayolc > raAraYol) { //arayol
            append(dr2, arayol)
            arayolc = 0
            raAraYol = rand(arayolR[0], arayolR[1])
        } else if (anayolc > raAnaYol && arayolc != 0) {
            append(dr2, anayol)
            // if (det(0.2)) {
            //     append(dr2, anayol)
            //     if (det(0.2)) {
            //         append(dr2, anayol)
            //     }
            // }
            anayolc = 0
            raAnaYol = rand(anayolR[0], anayolR[1])
        } else if (det(dereP) && dereY && anayolc != 0 && arayolc != 0) {
            append(dr2, arayol)
            append(dr2, randInt(dereR[0], dereR[1]) + 0.3)
            append(dr2, arayol)
            arayolc = 0
            anayolc = 0
            derec = 0
            // raDere = rand(dereR[0], dereR[1])
        } else if (fxrand() < üyProb & üstyolc > 0) {
            append(dr2, üstyol)
            üstyolc = 0

        } else if (det(parkYolprob) && parkyolY) {
            append(dr2, arayol)
            append(dr2, randInt(parkyolR[0], parkyolR[1]) + 0.4)
            append(dr2, arayol)
        } else {
            append(dr2, randInt(x, y))
            arayolc += 1
            anayolc += 1
            derec += 1
            üstyolc += 1
        }
    }
}

function dr1c(div1) {
    let v = 0
    for (let r = div1; r != 0; r--) {
        v += dr1[r]
    }
    return v
}

function dr2c(div2) {
    let v = 0
    for (let r = div2; r != 0; r--) {
        v += dr2[r]
    }
    return v
}

function randInt(x, y) {
    return int(map(fxrand(), 0, 1, x, y))
}

function det(val) {
    if (fxrand() < val) {
        return true
    } else {
        return false
    }
}

function rectB(x, y, w, h, hei, z, cap, bui) {
    r.push()
    // if (üydraw) {
    //     if (!bw) { //col
    //         r.push()
    //         r.colorMode(HSL, 360, 100, 255)
    //         bcol = r.color(rand(hueStart, hueStart + 60), 0, rand(127, 140) + 40) //rand(50, 55)
    //         roadc = r.color(hueStart, saturation(bcol) / 2, 200) //220//178
    //         r.pop()
    //     } else { //bw
    //         r.push()
    //         r.colorMode(HSL, 360, 100, 255)
    //         bcol = r.color(rand(hueStart, hueStart + 30), 0, 180 + hm)
    //         roadc = r.color(hueStart, saturation(bcol), 220) //220
    //         r.pop()
    //     }
    // }


    r.push()
    r.colorMode(HSL, 360, 100, 255)
    bcol = r.color(hue(bcol) + tHue, saturation(bcol) + tSat, lightness(bcol) + tLig)
    bcol2 = r.color(hue(bcol2) + tHue, saturation(bcol2) + tSat, lightness(bcol2) + tLig) //
    bcol3 = r.color(hue(bcol3) + tHue, saturation(bcol3) + tSat, lightness(bcol3) + tLig) //
    r.pop()

    // r.colorMode(HSL)
    // r.strokeWeight(0.5 * sw)//outlines
    // r.fill(rand(235, 255))
    // r.push()
    // r.ambientMaterial(150);
    // r.rotateY(radians(90))
    // r.translate(x,y,h)
    // r.plane(w,h)
    // r.pop()
    // r.texture(bin1Tex)
    // r.fill(200)
    winRH = rand(0.95, 1.7)
    if (trainB) {
        winRH = 1
    }
    winRW = 1 //rand(0.8,1.2)
    makeTex = det(0.5)
    bLstr = rand(-50, -25)
    aralık2 = rand(0.45, 1.9)
    aralık3 = rand(0.55, 1.1)
    bdik = 0
    byan = 0
    cdik = 0
    cyan = 0
    if (det(0.5)) {
        bdik = 1
    } else {
        byan = 1
    }
    if (det(0.1)) {
        bdik = 1;
        byan = 1
    }

    if (det(0.5)) {
        cdik = 1
    } else {
        cyan = 1
    }
    if (det(0.1)) {
        cdik = 1;
        cyan = 1
    }


    if (!axC) {
        r.fill(bcol)
    } else {
        r.fill(bcol2)
    }
    extrudeLine(x, y, x + w, y, hei, z, 1, bui)

    // r.texture(bulTex)
    // extrudeLine(x, y, x + w, y, hei, z, 1, bui,1)


    if (!axC) {
        r.fill(bcol2)
    } else {
        r.fill(bcol)
    }
    extrudeLine(x, y, x, y + h, hei, z, 1, bui)

    // r.texture(bulTex)
    // extrudeLine(x, y, x, y + h, hei, z, 1, bui,1)

    if (!axC) {
        r.fill(bcol2)
    } else {
        r.fill(bcol)
    }
    if (trainB) {
        extrudeLine(x + w, y, x + w, y + h, hei, z, 1, bui) //0arka taraf
    } else {
        extrudeLine(x + w, y, x + w, y + h, hei, z, 0, bui) //0arka taraf
    }
    if (!axC) {
        r.fill(bcol)
    } else {
        r.fill(bcol2)
    }

    if (trainB) {
        extrudeLine(x, y + h, x + w, y + h, hei, z, 1, bui) //0arka taraf
    } else {
        extrudeLine(x, y + h, x + w, y + h, hei, z, 0, bui) //0arka taraf
    }

    // r.fill(255)
    if (cap) {
        r.translate(0, 0, hei + z)
        r.fill(bcol3) //235
        r.rect(x, y, w, h)

        if (kald) {
            // r.texture(bulTex)
            for (let wx = 0; wx < w; wx += 1.5) {
                r.strokeWeight(0.4 * sw)
                r.stroke(rand(0, 30))
                jLine(x + wx, y, 0, x + wx, y + h, 0, 1, 0.07)
            }
            for (let wx = 0; wx < h; wx += 0.6) {
                r.strokeWeight(0.4 * sw)
                r.stroke(rand(0, 30))
                jLine(x, y + wx, 0, x + w, y + wx, 0, 1, 0.07)
            }
        }
        if (makeCar) {
            xcev = rand(0.4, 0.8)
        } else {
            xcev = 1
        }
        if (bui || cüstüt1 || makeCar) {
            if (cdik) {
                for (let wx = 0; wx < w; wx += aralık3 * xcev) {
                    r.strokeWeight(rand(0.3, 0.5) * sw)
                    r.stroke(rand(50, 100) + bLstr)
                    jLine(x + wx, y, 0, x + wx, y + h, 0, 1, 0.09)
                }
            }
            if (cyan) {
                for (let wx = 0; wx < h; wx += aralık3 * xcev) {
                    r.strokeWeight(rand(0.3, 0.5) * sw)
                    r.stroke(rand(50, 100) + bLstr)
                    jLine(x, y + wx, 0, x + w, y + wx, 0, 1, 0.09)
                }
            }
        }
        // r.texture(yolTex)



    }

    r.push()
    r.colorMode(HSL, 360, 100, 255)
    bcol = r.color(hue(bcol) - tHue, saturation(bcol) - tSat, lightness(bcol) - tLig)
    bcol2 = r.color(hue(bcol2) - tHue, saturation(bcol2) - tSat, lightness(bcol2) - tLig) //
    bcol3 = r.color(hue(bcol3) - tHue, saturation(bcol3) - tSat, lightness(bcol3) - tLig) //
    r.pop()

    r.pop()
}

function extrudeLine(x1, y1, x2, y2, h, z, wind, bui, tex) {
    // r.texture(bin1Tex)
    minx = min([x1, x2])
    maxx = max([x1, x2])
    miny = min([y1, y2])
    maxy = max([y1, y2])
    // print("here1")
    fark = max(maxx - minx, maxy - miny) * 5 //* 5
    if (tex && makeTex) { //tex&&makeTex
        r.beginShape()
        r.vertex(minx, miny, z, 0, 0)
        r.vertex(minx, miny, z + h, 0, h * 5)
        r.vertex(maxx, maxy, z + h, fark, h * 5)
        r.vertex(maxx, maxy, z, fark, 0)
        r.endShape(CLOSE)
        return
    } else {
        r.beginShape()
        r.vertex(minx, miny, z)
        r.vertex(minx, miny, z + h)
        r.vertex(maxx, maxy, z + h)
        r.vertex(maxx, maxy, z, )
        r.endShape(CLOSE)
    }
    // print(int(cmin+clevels),int(cmax+clevels))
    fark = max(maxx - minx, maxy - miny) //* 5
    // const isInside = (point, rect) => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom
    //pencil sketch

    r.push()

    r.stroke(0)
    if(lamb){
        r.strokeWeight(0.1 * sw)
    }else{
        r.strokeWeight(0.5 * sw)
    }

    // fac=8
    // sjl=rand(-h/fac,h/fac)
    // ejl=rand(-h/fac,h/fac)
    r.beginShape()
    for (let t = 0; t < h + 0.1; t += 2) { //dik
        r.vertex(minx + rand(-0.2, 0.2), miny + rand(-0.2, 0.2), z + t)
    }
    r.endShape()

    // sjl=rand(-fark/fac,fark/fac)
    // ejl=rand(-fark/fac,fark/fac)
    r.beginShape()
    for (let t = 0; t < fark + 0.1; t += 2) { //+3 üst
        r.vertex(minx + rand(-0.2, 0.2) + (maxx - minx) / fark * t, miny + rand(-0.2, 0.2) + (maxy - miny) / fark * t, z + h)
    }
    r.endShape()
    
    // sjl=rand(-fark/fac,fark/fac)
    // ejl=rand(-fark/fac,fark/fac)
    r.beginShape()
    for (let t = 0; t < fark + 0.1; t += 2) { //alt
        r.vertex(minx + rand(-0.2, 0.2) + (maxx - minx) / fark * t, miny + rand(-0.2, 0.2) + (maxy - miny) / fark * t, z)
    }
    r.endShape()
    r.pop()


    if (jig) {
        r.push()
        let aralık = 0.7 //dist(x1, y1, x2, y2)/5
        let until = dist(x1, y1, x2, y2) //10
        for (let t = 0; t < until; t += aralık) { //dist(x1, y1, x2, y2)
            let lx = minx + (maxx - minx) / until * t
            let ly = miny + (maxy - miny) / until * t
            r.strokeWeight(0.4 * sw)
            r.stroke(rand(0, 30))
            jLine(lx, ly, z, lx, ly, z + h, 0.6, 0.12)
        }
        r.pop()
    } else if (bui) {
        // binayan
        if (bdik) {
            r.push()
            until = dist(x1, y1, x2, y2) //10
            for (let t = 0; t < until; t += aralık2) { //dist(x1, y1, x2, y2)
                let lx = minx + (maxx - minx) / until * t
                let ly = miny + (maxy - miny) / until * t
                r.strokeWeight(rand(0.3, 0.5) * sw)
                r.stroke(rand(50, 100) + bLstr)
                jLine(lx, ly, z, lx, ly, z + h, 1.2, 0.09)
            }
            r.pop()
        }

        if (byan) {
            r.push()
            until = h
            for (let t = 0; t < until; t += aralık2) { //dist(x1, y1, x2, y2)
                let lx1 = minx
                let ly1 = miny
                let lx2 = minx + (maxx - minx) / 1
                let ly2 = miny + (maxy - miny) / 1
                r.strokeWeight(rand(0.3, 0.5) * sw)
                r.stroke(rand(50, 100) + bLstr)
                jLine(lx1, ly1, z + t, lx2, ly2, z + t, 1.2, 0.09)
            }
            r.pop()
        }
        //çatı




    }

    if (wind && bui) {
        // r.push()
        // r.translate(0,0,z)
        // windows2(x1, y1, x2, y2, h)
        // r.pop()

        for (let ve = 1; ve < h - 2; ve += wHeight) {
            r.push()

            r.strokeWeight(0.5 * sw)
            if (!dbw) {
                r.push()
                if (!trainB) {
                    // r.translate((rotX) / 45, (-90 - rotX) / 45, (90 - rotZ) / 45)
                    //     r.translate(-0.5,-0.5,0.5)
                }

                windows(x1, y1, x2, y2, wHeight / 2, ve)
                
                r.pop()
            }
            r.pop()
        }
    }
}

function windows(x1, y1, x2, y2, h, z) {
    // x1=x1+1
    // x2=x2-1
    // y1=y1+1
    // y2=y2-1
    h = h * winRH
    let count = dist(x1, y1, x2, y2) / wWidth
    for (let d = 0.1; d < 0.9; d += 1 / count) {
        let nx1 = lerp(x1, x2, d)
        let ny1 = lerp(y1, y2, d)
        let nx2 = lerp(x1, x2, d + 1 * winRW / count / 2)
        let ny2 = lerp(y1, y2, d + 1 * winRW / count / 2)
        // r.line(nx1, ny1, nx2, ny2)

        //cam camdetayı
        // r.fill(255)
        // r.beginShape()
        // r.vertex(nx1, ny1, z)
        // r.vertex(nx2, ny2, z)
        // r.vertex(nx2, ny2, z + h)
        // r.vertex(nx1, ny1, z + h)
        // r.endShape(CLOSE)


        if (det(0.8)) {
            r.fill(rand(0, 150))
        } else {
            r.fill(255)
        }
        r.beginShape()
        r.vertex(nx1, ny1, z)
        r.vertex(nx2, ny2, z)
        r.vertex(nx2, ny2, z + h)
        r.vertex(nx1, ny1, z + h)
        r.endShape(CLOSE)

        r.push()
        r.stroke(255)
        r.strokeWeight(rand(0.07, 0.15) * sw)
        let pcount = rand(10, 40)
        for (let t = 0; t < pcount; t++) {
            r.point(rand(nx1, nx2), rand(ny1, ny2), rand(z, z + h))
        }
        r.pop()


        r.push()
        r.stroke(0)
        r.strokeWeight(0.5 * sw)
        jLine(nx1, ny1, z, nx2, ny2, z, 0.6, 0.2)
        jLine(nx2, ny2, z, nx2, ny2, z + h, 0.6, 0.2)
        jLine(nx2, ny2, z + h, nx1, ny1, z + h, 0.6, 0.2)
        jLine(nx1, ny1, z + h, nx1, ny1, z, 0.6, 0.2)
        r.pop()
    }

    // h = h * winRH
    


}

function windows2(x1, y1, x2, y2, h) {
    // x1=x1+0.5
    // x2=x2-0.5
    // y1=y1+0.5
    // y2=y2-0.5
    let count = dist(x1, y1, x2, y2) // / wWidth
    
    // divX=0.4
    // divY=0.1

    // count=int(count)
    // h=int(h)

    xedge=0//1/count//0.1
    yedge=0//1/h//0.1

    divCx=int(count/4)+1
    divCy=int(h/4)+1

    divX=(1-2*xedge)/divCx
    divY=(1-2*yedge)/divCy
    
    ww=0.3
    wh=0.8

    nrHe=h/((1-divY)*divCy)//9
    for (let he = yedge; he < 1-divY/2*3-yedge; he += divY) {
        for (let d = xedge; d < 1-divX/2-xedge; d += divX) { //0.7/count
            let nx1 = lerp(x1, x2, d)
            let ny1 = lerp(y1, y2, d)
            let nx2 = lerp(x1, x2, d + divX*ww)
            let ny2 = lerp(y1, y2, d + divX*ww)

            rHe=map(he,0,1-divY,0,h)
            

            if (det(0.8)) {
                r.fill(rand(0, 150))
            } else {
                r.fill(255)
            }
            // r.fill(0)

            // let realW=max([abs(nx2-nx1)],[abs(ny2-ny1)])/ww*(1-ww)
            r.beginShape()
            r.vertex(nx1, ny1, rHe)
            r.vertex(nx2, ny2, rHe)
            r.vertex(nx2, ny2, rHe+nrHe)
            r.vertex(nx1, ny1, rHe+nrHe)
            r.endShape(CLOSE)
        }
    }
}

function build(blX, blY, blW, blH) {
    r.strokeWeight(0 * sw)
    wWidth = rand(1.5, 3)
    wHeight = rand(3, 5)
    rectB(blX, blY, blW, blH, upval, 0, 1, 1)
    let x = blX
    let y = blY
    let w = blW
    let h = blH
    // roof = 2
    roof = randInt(1, 4)

    if (roof == 2 && upval > 20) {
        roof = 1
    }

    if (roof == 1) {
        jig = 1
        rectB(x, y, w, 1, 1.5, upval, 1, 0)
        rectB(x, y, 1, h, 1.5, upval, 1, 0)
        rectB(x + w, y, -1, h, 1.5, upval, 1, 0)
        rectB(x, y + h, w, -1, 1.5, upval, 1, 0)
        jig = 0

        if (fxrand() < 0.7) {
            jig = 1
            cüstüt1 = 1
            rectB(x + w / 3, y + h / 3, w - w / 3 * 2, h - h / 3 * 2, 2, upval, 1, 0)
            cüstüt1 = 0
            jig = 0
        }

        roofh = 4
        bacaV = 0.3
        if (fxrand() < bacaV) {
            rectB(x + w / 2, y + h / 4 * 1, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 2, y + h / 4 * 3, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 4 * 1, y + h / 2, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 4 * 3, y + h / 2, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }

    } else if (roof == 2) {//4 çatı

        x = blX - 0.3
        y = blY - 0.3
        w = blW + 0.6
        h = blH + 0.6
        rectB(x, y, w, h, 0.2, upval - 0.2, 1, 0)

        r.push()
        r.colorMode(HSL, 360, 100, 255)
        r.strokeWeight(0 * sw)
        roofh = w * h / 80 //5
        r1 = r.color(hue(bcol2), saturation(bcol2), lightness(bcol2) + (255 - lightness(bcol2)) / 12)
        r2 = r.color(hue(bcol), saturation(bcol), lightness(bcol) + (255 - lightness(bcol)) / 12)
        r3 = r.color(hue(bcol), saturation(bcol), lightness(bcol) + (255 - lightness(bcol)) / 5)
        r4 = r.color(hue(bcol2), saturation(bcol2), lightness(bcol2))

        for (let rt = 1; rt < 5; rt++) {
            // this["roofTex"+rt]
            this["roofTex" + rt].background(r.color(hue(this["bcol" + rt]%2+1), saturation(this["r" + rt]), lightness(this["r" + rt])))//hue 36
            for (let t = 0; t < 200; t += 7) {
                this["roofTex" + rt].stroke(r.color(hue(this["r" + rt]), saturation(this["r" + rt]), lightness(this["r" + rt])/2)) //-130
                this["roofTex" + rt].strokeWeight(2)
                this["roofTex" + rt].line(0, t, 200, t)
                this["roofTex" + rt].line(t, 0, t, 200)
            }

        }

        bacaV = 0.3
        if (fxrand() < bacaV) {
            rectB(x + w / 2, y + h / 4 * 1, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 2, y + h / 4 * 3, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 4 * 1, y + h / 2, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }
        if (fxrand() < bacaV) {
            rectB(x + w / 4 * 3, y + h / 2, -1, -1, rand(roofh / 4 * 3, roofh), upval, 1, 0)
        }






        // r.fill(r1)
        r.texture(roofTex1)
        rV = 200
        r.beginShape()
        r.vertex(x, y, upval, 0, 0)
        r.vertex(x, y + h, upval, rV, 0)
        r.vertex(x + w / 2, y + h / 2, upval + roofh, rV / 2, rV)
        r.endShape(CLOSE)

        // r.fill(r2)
        r.texture(roofTex2)
        // rV=w*10
        r.beginShape()
        r.vertex(x, y, upval, 0, 0)
        r.vertex(x + w, y, upval, rV, 0)
        r.vertex(x + w / 2, y + h / 2, upval + roofh, rV / 2, rV)
        r.endShape(CLOSE)

        // r.fill(r3)
        r.texture(roofTex3)
        // rV=h*10
        r.beginShape()
        r.vertex(x + w, y + h, upval, 0, 0)
        r.vertex(x + w, y, upval, rV, 0)
        r.vertex(x + w / 2, y + h / 2, upval + roofh, rV / 2, rV)
        r.endShape(CLOSE)

        // r.fill(r4)
        r.texture(roofTex4)
        // rV=w*10
        r.beginShape()
        r.vertex(x + w, y + h, upval, 0, 0)
        r.vertex(x, y + h, upval, rV, 0)
        r.vertex(x + w / 2, y + h / 2, upval + roofh, rV / 2, rV)
        r.endShape(CLOSE)

        r.pop()

        r.push()
        r.noFill()
        r.stroke(0)
        r.strokeWeight(0.5 * sw)
        jLine(x, y, upval, x + w / 2, y + h / 2, upval + roofh, 1.8, 0.2)
        jLine(x + w, y, upval, x + w / 2, y + h / 2, upval + roofh, 1.8, 0.2)
        jLine(x + w, y + h, upval, x + w / 2, y + h / 2, upval + roofh, 1.8, 0.2)
        jLine(x, y + h, upval, x + w / 2, y + h / 2, upval + roofh, 1.8, 0.2)
        r.pop()




    } else if (roof == 3) {//park

        jig = 1
        rectB(x, y, w, 1, 1.5, upval, 1, 0)
        rectB(x, y, 1, h, 1.5, upval, 1, 0)
        rectB(x + w, y, -1, h, 1.5, upval, 1, 0)
        rectB(x, y + h, w, -1, 1.5, upval, 1, 0)
        jig = 0
        r.push()
        r.translate(0, 0, upval)

        park(blX + 1, blY + 1, blW - 2, blH - 2)

        r.pop()


    } else if (roof == 4) {

    }


}

// function mouseWheel(event) {
//     // print(event.delta);
//     //move the square according to the vertical scroll amount
//     magzoom += event.delta / 5
//     //uncomment to block page scrolling
//     //return false;
// }



function grass(x, y) {
    // r.push()

    r.line(x, y, 0, x + rand(-0.2, 0.2), y + rand(-0.2, 0.2), rand(0.3, 0.8))
    // r.beginShape()
    // r.vertex(x, y, 0)
    // r.vertex(x + rand(-0.2, 0.2), y + rand(-0.2, 0.2), rand(0.3, 0.8))
    // r.endShape()
    // r.pop()
}

function bias(start, end, divideParts, biasedNumber, influence) {
    let dict = {}
    let inc = 5 / divideParts
    for (let v = 0; v < 5 + inc; v += inc) {
        dict[round(map(v, 0, 5, start, end), 2)] = int(pow(influence, (abs(5 - 0 + inc) - abs(map(biasedNumber, start, end, 0, 5) - v))) * 10) //10^(abs(bNum-v)*20) 
        // dict[v] = int(exp(end-start-abs(bNum-v)))
    }
    // print(dict)
    return parseFloat(weightedRand2(dict))
}


function weightedRand2(spec) {
    var i, j, table = [];
    for (i in spec) {
        for (j = 0; j < spec[i] * 10; j++) {
            table.push(i);
        }
    }

    return table[Math.floor(fxrand() * table.length)]

}


function people3(x, y) {
    let scale = 0.08
    // r.fill(10)
    r.translate(x, y)
    r.rotateZ(-rotZ)
    r.rotateX(-90)
    r.translate(-x, -y)
    r.fill(rand(10, 70))
    // r.fill(200)

    bHeight = rand(15, 30) * scale
    bodyX = rand(7, 15) * scale
    bodyY = rand(20, 25) * scale
    r.push()
    r.translate(x, y - bHeight - bodyY / 1.5)
    r.rotate(radians(rand(-30, 30)))
    r.ellipse(0, 0, rand(5, 8) * scale, rand(5, 9) * scale) //head
    r.pop()
    r.ellipse(x, y - bHeight, bodyX, bodyY) //body
    r.beginShape()

    r.curveVertex(x - bodyX / 2, y - bHeight)

    r.curveVertex(x - rand(bodyX / 2, bodyX / 4), y) //b1
    r.curveVertex(x, y - bHeight + rand(bodyY / 3, bodyY / 1.5)) //g1
    r.curveVertex(x + rand(bodyX / 2, bodyX / 4), y) //b2

    r.curveVertex(x + bodyX / 2, y - bHeight)
    r.endShape(CLOSE)
}

function road(x, y, genişlik2, ax, yükseklik) {
    if (!roadD) {
        return
    }
    genişlik = genişlik2
    if (genişlik == arayol || genişlik == anayol || genişlik == üstyol || (genişlik + "").split(".")[1] == 3 || genişlik == deniz) {} else {
        return
    }

    if(!ortho){
        dd=dist(x,y,0,0)
        // lScale=map(dd,0,500,1,0.01)
        lScale=1000/dd
        sw = pdfac / 2 * zoom / 5*lScale
        // print(sw)
        
    }

    if (ax == 1) {
        // return
        hit = collideLinePoly(-2000, y + genişlik2, 10000, y + genişlik2, poly) //+genişlik olmayanla karşılaştır hangisi büyükse onu kullan
        if (intersectspoints.length != 2) {
            return
        } else {
            // print(intersectspoints)
            if (intersectspoints[0][0] < intersectspoints[1][0]) {
                iter = intersectspoints[0][0]
            } else {
                iter = intersectspoints[1][0]
            }
            adlen = abs(intersectspoints[0][0] - intersectspoints[1][0])
        }
    }

    if (ax == 0) {
        hit = collideLinePoly(x + genişlik2, -2000, x + genişlik2, 10000, poly)
        if (intersectspoints.length != 2) {
            return
        } else {
            // print(intersectspoints)
            if (intersectspoints[0][1] < intersectspoints[1][1]) {
                iter = intersectspoints[0][1]
            } else {
                iter = intersectspoints[1][1]
            }
            adlen = abs(intersectspoints[0][1] - intersectspoints[1][1])
        }
    }

    // print(adlen)
    r.strokeWeight(0.5 * sw)
    r.stroke(0)

    getCol()

    // print("road")
    r.push()
    r.translate(x, y, 0)

    if (ax == 1) {
        r.rotateZ(-90)
        r.translate(-genişlik, 0)
        axC = 1
        len = adlen //dr1sum
        r.translate(0, iter)
    } else {
        axC = 0
        len = adlen //dr2sum
        r.translate(0, iter)
    }

    r.fill(roadc)
    r.strokeWeight(0.5 * sw)

    if (genişlik == anayol) {
        popRoad = weightedRand({
            0: 10, //car
            1: 10, //peop
            2: 10, //train
            // 3: 50, // rect 
        })

        if ((dnz1 == 1 & axC == 1) || (dnz2 == 1 & axC == 0)) {
            r.translate(0, iter)
        } else {}
        if (popRoad == 0) {
            car(0, genişlik, 4)

            dashed(genişlik / 4, 0, genişlik / 4, len, 150 * len / 800)
            dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
            // r.line(genişlik / 2, 0, genişlik / 2, len)
            jLine(genişlik / 2, 0, 0, genişlik / 2, len, 0, 1.6, 0.12)
            r.strokeWeight(0.25 * sw) //0.5

            // rectB(0, 0, 0.5, len, 1.0, 0, 1)
            // rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
            for (let t = 0; t < len; t += rand(9, 14)) {

                tree2(genişlik / 2, t, rand(3.5, 6))
            }
            rectB(genişlik / 2, 0, 0.2, len, .5, 0, 1)
        } else if (popRoad == 1) {
            roadPeople(0, genişlik)

            dashed(genişlik / 4, 0, genişlik / 4, len, 150 * len / 800)
            dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
            // r.line(genişlik / 2, 0, genişlik / 2, len)
            jLine(genişlik / 2, 0, 0, genişlik / 2, len, 0, 1.6, 0.12)
            r.strokeWeight(0.25 * sw) //0.5
            // rectB(0, 0, 0.5, len, 1.0, 0, 1)
            // rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
            // rectB(genişlik / 2, 0, 0.2, len, 1.0, 0, 1)
        } else if (popRoad == 2) { //train

            train(0, genişlik, 3)
        }

    }

    if (genişlik == üstyol) {
        if ((dnz1 == 1 & axC == 1) || (dnz2 == 1 & axC == 0)) {
            üstkolon = 1
        } else {
            üstkolon = 0
        }
        r.push()
        r.translate(0, 0, üstyolH)
        // dashed(genişlik / 4, 0, genişlik / 4, len, 150 * len / 800)
        // dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
        // r.line(genişlik / 2, 0, genişlik / 2, len)
        r.push()
        r.noStroke()
        if (üstkolon) {
            for (let ük = 0; ük < deniz; ük += 25) {
                rectB(üstyol / 2, ük, 2, 2, -üstyolH * 1.4, 0)
            }
        }
        r.pop()

        popRoad = weightedRand({
            0: 10, //car
            1: 0, //roadPeople
            2: 15, //train
            3: 5, // park 
        })

        if (popRoad == 0) {
            car(0, genişlik, 4)

            dashed(genişlik / 4, 0, genişlik / 4, len, 150 * len / 800)
            dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
            // r.line(genişlik / 2, 0, genişlik / 2, len)
            jLine(genişlik / 2, 0, 0, genişlik / 2, len, 0, 1.6, 0.12)
            r.strokeWeight(0.25 * sw) //0.5

            tempCol(0, 0, -lightness(bcol) / 4)
            jig = 1
            rectB(0, 0, 0.5, len, 1.0, 0, 1)
            rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
            rectB(genişlik / 2, 0, 0.2, len, 1.0, 0, 1)
            jig = 0
            tempColDel()
        } else if (popRoad == 1) {
            roadPeople(0, genişlik)

            dashed(genişlik / 4, 0, genişlik / 4, len, 150 * len / 800)
            dashed(genişlik / 4 * 3, 0, genişlik / 4 * 3, len, 150 * len / 800)
            // r.line(genişlik / 2, 0, genişlik / 2, len)
            jLine(genişlik / 2, 0, 0, genişlik / 2, len, 0, 1.6, 0.12)
            r.strokeWeight(0.25 * sw) //0.5
            tempCol(0, 0, -lightness(bcol) / 4)
            jig = 1
            rectB(0, 0, 0.5, len, 1.0, 0, 1)
            rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
            rectB(genişlik / 2, 0, 0.2, len, 1.0, 0, 1)
            jig = 0
            tempColDel()
        } else if (popRoad == 2) { //train
            // train(0,genişlik/2)
            // train(genişlik/2,genişlik)

            train(0, genişlik, 3)
        } else if (popRoad == 3) {
            r.translate(0, 0, 0.2)
            park(0, 0, üstyol, len)
            tempCol(0, 0, -lightness(bcol) / 4)
            jig = 1
            rectB(0, 0, 0.5, len, 1.0, 0, 1)
            rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
            jig = 0
            tempColDel()
        }

        r.pop()

        // r.strokeWeight(0.25 * sw) //0.5
        // rectB(0, 0, 0.5, len, 1.0, 0, 1)
        // rectB(genişlik, 0, -0.5, len, 1.0, 0, 1)
        // rectB(genişlik / 2, 0, 0.2, len, 1.0, 0, 1)


    }

    if (genişlik == arayol) {
        if ((dnz1 == 1 & axC == 1) || (dnz2 == 1 & axC == 0)) {
            r.translate(0, iter)
        } else {}
        dashed(genişlik / 2, 0, genişlik / 2, len, 150 * len / 800)


        if (det(cORp)) {
            car(0, genişlik, 2)
        } else {
            roadPeople(0, genişlik)
        }
    }

    if ((genişlik + "").split(".")[1] == 3) {
        if ((dnz1 == 1 & axC == 1) || (dnz2 == 1 & axC == 0)) {
            r.translate(0, iter)
        } else {}
        csab=1
        getCol()
        r.translate(0, 0, -5)
        // r.fill(bcol)
        // extrudeLine(div1coord + dere, 0, div1coord + dere, 800, 4.5, 0)
        r.fill(bcol2)
        extrudeLine(genişlik, 0, genişlik, len, 10, -5)
        txline(genişlik, 0, 0, genişlik, 0, 5)
        r.fill(bcol)
        extrudeLine(0, 0, 0, len, 10, -5)
        txline(0, 0, 0, 0, 0, 5)

        r.strokeWeight(0.5 * sw)
        r.fill(230)
        // r.rect(0, 0, dere, len)
        water(0, 0, genişlik, len)
        // for (let d = 0; d < 20; d++) {
        //     dashed(dere / 20 * d, 0, dere / 20 * d, len, rand(200, 400) * len / 800)
        // }
        csab=0
    }

    if (genişlik == deniz) {
        r.translate(0, 0, -5)
        r.fill(bcol2)
        extrudeLine(deniz, 0, deniz, len, 5, 0)
        txline(deniz, 0, 0, deniz, 0, 5)
        extrudeLine(0, 0, 0, len, 5, 0)
        txline(0, 0, 0, 0, 0, 5)

        r.strokeWeight(0.5 * sw)
        r.fill(230)
        water(0, 0, deniz, len)

    }

    r.pop()
}

function people(x, y) {
    // if (dbp) {
        return
    // }
    let scale = 0.8 * rand(0.9, 1.1)
    // r.fill(10)
    r.translate(x, y)
    r.rotateZ(-rotZ)
    r.rotateX(+90)
    // r.translate(-x, -y)
    r.fill(rand(10, 70))
    // r.fill(200)

    pickPeople = int(rand(0, pt.length))
    r.beginShape()
    for (t = 0; t < pt[pickPeople].length; t++) {
        r.vertex(pt[pickPeople][t][0] * scale, pt[pickPeople][t][1] * scale)
    }
    r.endShape()
}

function rectLine(x1, y1, x2, y2, h, z) {
    r.push()
    r.translate(0, 0, z)
    r.strokeWeight(0.5)

    for (let lin = 0; lin < (x2 - x1); lin++) {
        r.beginShape()
        r.vertex(x1 + lin, y1, z)
        r.vertex(x1 + lin, y1, z + h)
        r.endShape(CLOSE)
    }

    r.pop()
}

function kpeople(x, y) {
    if(dbpep){ 
        return
    }
    r.push()
    let scale = 0.7 * rand(0.9, 1.1)
    // r.fill(10)
    r.translate(x, y)
    r.rotateZ(-rotZ)
    if (axC) {
        r.rotateZ(-90)
    }
    r.rotateX(+90)

    r.stroke(0)
    r.strokeWeight(0.4 * sw)
    // r.noStroke()

    r.fill(rand(0, 90))
    // r.fill(h.color(0,100,50+rand(-15,+15)))
    // r.fill(200)

    pickPeople = int(rand(0, pt.length))
    r.beginShape()
    for (t = 0; t < pt[pickPeople].length; t++) {
        r.vertex(pt[pickPeople][t][0] * scale, pt[pickPeople][t][1] * scale)
    }
    r.endShape()
    r.pop()
}

function people2(x, y) {

    let scale = 0.08
    // r.fill(10)
    r.translate(x, y)
    r.rotateZ(-45)
    r.rotateX(-90)
    r.translate(-x, -y)

    d.push()
    x2 = x
    y2 = y
    //   d=createGraphics(200,200)
    d.clear()
    d.translate(100, 100)
    x = 0
    y = 0
    bHeight = rand(15, 30) * scale
    bodyX = rand(7, 15) * scale
    bodyY = rand(20, 25) * scale
    d.fill(random(10, 70))
    d.noStroke()
    d.push()
    d.translate(x, y - bHeight - bodyY / 1.5)
    d.rotate(radians(rand(-30, 30)))
    d.ellipse(0, 0, rand(5, 8) * scale, rand(5, 9) * scale) //head
    d.pop()
    d.ellipse(x, y - bHeight, bodyX, bodyY) //body
    d.beginShape()

    d.curveVertex(x - bodyX / 2, y - bHeight)

    d.curveVertex(x - rand(bodyX / 2, bodyX / 4), y) //b1
    d.curveVertex(x, y - bHeight + rand(bodyY / 3, bodyY / 1.5)) //g1
    d.curveVertex(x + rand(bodyX / 2, bodyX / 4), y) //b2

    d.curveVertex(x + bodyX / 2, y - bHeight)
    d.endShape(CLOSE)
    d.pop()
    r.image(d, x2 - 100, y2 - 100)

}

function tree2(x, y, he) {
    getCol()
    treestroke = rand(min(cmin,cmax)-10, max(cmin,cmax))//rand(100, 165) - 20
    // treestroke = lightness(bcol)+rand(0,30)
    // treestroke = (lightness(bcol)+lightness(bcol2))/2+rand(-30,30)
    // treestroke = rand(lightness(bcol), lightness(bcol2))
    // r.fill(230)
    

    if (bw) {
        r.fill(treestroke)
        r.stroke(treestroke)
        // r.fill(h.color(0,100,50+rand(-15,+15)))
    } else {
        // r.push()
        // r.colorMode(HSL, 360, 100, 100)
        // let nc = r.color(rand(100, 115), rand(10, 20), rand(30, 70))

        // r.pop()
        treecol=random(pallet)
        treecoll=h.color(hue(treecol), saturation(treecol), lightness(treecol)/100*255-rand(-30, 30))
        r.stroke(treecoll)
        r.fill(treecoll)
    }

    r.push()


    // r.translate((rotX)/45,(-90-rotX)/45,(90-rotZ)/45)
    r.strokeWeight(rand(2, 3) * sw)
    r.beginShape()
    r.vertex(x, y, 0)
    r.vertex(x, y, he)
    r.endShape()
    r.noStroke()
    r.stroke(0)
    r.strokeWeight(0.3 * sw)
    
    r.translate(x, y, he)
    r.rotateZ(-rotZ)
    if (axC) {
        r.rotateZ(-90)
    }
    r.rotateX(-90)
    r.translate(-x, -y, -he)
    r.translate(0, 0, he)
    // r.circle(x,y,rand(3,5))
    // r.ellipse(x,y,rand(3,5),rand(3,5))

    r.translate(x, y)

    elipXrand = rand(1, 2)
    elipYrand = rand(1, 2)
    // r.strokeWeight(0)
    // r.stroke(0)
    noiserand = (fxrand() * 888888)
    r.beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
        xoff = map(cos(a), -1, 1, 0.5, 1)
        yoff = map(sin(a), -1, 1, 0.5, 1)
        ra = scale * map(noise(noiserand + xoff * 10, noiserand + yoff * 10), 0, 1, 0.6, 1) * 0.85 //*50//*scalemap
        xs = ra * cos(a) * elipXrand * rand(0.95, 1.05)
        ys = ra * sin(a) * elipYrand * rand(0.95, 1.05)
        for (let t = 0; t < 10; t++) {
            if(bw){
                r.stroke(rand(treestroke - 45, treestroke - 5)) //-30,-5
            }else{
                r.stroke(h.color(hue(treecoll), saturation(treecoll), lightness(treecoll)-rand(45, 5)))
            }
            r.strokeWeight(rand(0.2, 0.4) * sw)
            // r.point(ra * cos(a) * elipXrand * bias(0,1,10,1,1.5), ra * sin(a) * elipYrand *bias(0,1,10,1,1.5))
            r.point(ra * cos(a) * elipXrand * sqrt(sqrt(rand(0, 1))), ra * sin(a) * elipYrand * sqrt(sqrt(rand(0, 1))))
        }
        r.vertex(xs, ys)
    }
    r.strokeWeight(0.3 * sw)
    r.stroke(0)
    r.endShape(CLOSE);

    // for(let t=0;t<100;t++){
    //     // r.strokeWeight(rand(0.3,2)*sw)
    //     r.stroke(rand(0,70))
    //     r.point(rand(-elipXrand,elipXrand),rand(-elipYrand,elipYrand))
    // }
    r.pop()
}


function tree(x, y, he) {
    r.push()
    let scale = 0.07 * he
    let tcol = rand(30, 60)
    r.stroke(tcol)
    r.fill(tcol)
    tsw = rand(9, 12) * 9
    r.strokeWeight(tsw * scale * sw)

    treeY = rand(60, 80)

    firX = x
    firY = y
    seg = treeY / 20
    noiserand = (fxrand() * 888888)
    for (treeL = 0; treeL < treeY; treeL += seg) {
        // txdirect=rand(-2,2)* scale
        txdirect = map(noise(noiserand + treeL / 10), 0, 1, -2, 2) * scale
        r.line(firX, firY, firX + txdirect, firY - seg * scale)
        firX = firX + txdirect
        firY = firY - seg * scale
        r.strokeWeight(tsw * scale - (seg / treeY * 8) * scale * treeL / seg)
    }
    r.noStroke()
    r.translate(firX, firY)
    elipXrand = rand(1, 2)
    elipYrand = rand(1, 2)
    r.strokeWeight(0)
    // r.stroke(0)
    r.beginShape();
    for (let a = 0; a < TWO_PI; a += 0.2) {
        xoff = map(cos(a), -1, 1, 0.5, 1)
        yoff = map(sin(a), -1, 1, 0.5, 1)
        ra = scale * map(noise(noiserand + xoff * 10, noiserand + yoff * 10), 0, 1, 0.6, 1) * 30 //*50//*scalemap
        xs = ra * cos(a) * elipXrand * rand(0.95, 1.05)
        ys = ra * sin(a) * elipYrand * rand(0.95, 1.05)

        r.vertex(xs, ys)
    }
    r.endShape(CLOSE);

    r.pop()
}

function tempColDel() {
    tHue = 0
    tSat = 0
    tLig = 0
}

function tempCol(h, s, l) {
    tHue = h
    tSat = s
    tLig = l
}

function park(x, y, w, h) {
    if(dbp){
        return
    }
    // r.fill(230)
    r.push()
    r.texture(parkTex)
    r.strokeWeight(0 * sw)
    rectuvmap(x, y, w, h)
    // r.rect(x, y, w, h)
        
    r.strokeWeight(0.25 * sw)
    let popfact=rand(1,2)
    let popfact2=rand(1,1.5)
    let area = w * h
    // print(area)
    // for (rg = 0; rg < area * 1; rg++) {
    //     let gx = rand(x, x + w)
    //     let gy = rand(y, y + h)
    //     // r.point(gx,gy)
    //     r.stroke(rand(50, 170))
    //     grass(gx, gy)
    // }

    r.push()
    r.fill(255)
    // r.noFill()
    r.stroke(50)
    r.strokeWeight(0.25 * sw)
    
    for (rg = 0; rg < area * 4; rg++) {
        if (bw) {
            r.stroke(rand(20, 100))
        } else {
            r.push()
            r.colorMode(HSL)
            let nc = r.color(112, 15, rand(15, 30))
            r.pop()
            r.stroke(nc)
            r.fill(nc)
        }
        r.beginShape()
        let gx = rand(x, x + w)
        let gy = rand(y, y + h)
        r.vertex(gx, gy, 0)
        r.vertex(gx + rand(-0.2, 0.2), gy + rand(-0.2, 0.2), rand(0.3, 0.8))
        r.vertex(gx + rand(-0.2, 0.2), gy, 0)
        r.endShape()
    }
    r.pop()


    r.strokeWeight(0.5 * sw)
    for (rg = 0; rg < area / 30*popfact; rg++) {
        let gx = rand(x, x + w)
        let gy = rand(y, y + h)

        kpeople(gx, gy)

    }
    for (rg = 0; rg < area / 60*popfact2; rg++) {
        let gx = rand(x, x + w)
        let gy = rand(y, y + h)
        // // r.point(gx,gy)
        // // grass(gx,gy)
        // r.push()
        // r.translate(gx, gy)
        // // r.rotateY(90)
        // r.rotateZ(-45)
        // r.rotateX(-90)
        // r.translate(-gx, -gy)
        // // people(gx,gy)
        // tree(gx, gy)
        // r.pop()
        
        tree2(gx, gy, rand(4, 6))

    }
    r.pop()
}


function water(x, y, w, h) {
    r.push()
    r.noStroke()
    r.stroke(rand(0, 30))
    r.strokeWeight(0.2 * sw)
    let dens = w / 4 * 3
    for (let d = 0; d < dens; d++) {
        if (bw) {
            r.fill(rand(max(cmin,cmax)-20, max(cmin,cmax)+20))//rand(210, 240)
        } else {
            r.push()
            r.colorMode(HSL, 360, 100, 255)
            // let nc = r.color(180, 22, rand(70, 90))
            let nc=r.color(hue(wwc), saturation(wwc), lightness(wwc)/100*255-rand(-15, 15))
            r.pop()
            r.fill(nc)
        }

        r.beginShape()
        for (let po = 0; po < h; po += 1) {
            r.vertex(w / dens * d, po, noise(d / 2, po / 5) * 3 - 0.5)
        }
        r.vertex(w / dens * d, h, -10)
        r.vertex(w / dens * d, 0, -10)
        r.endShape(CLOSE)

        for (let po = 0; po < h; po += 1) {
            r.push()

            r.translate(w / dens * d, po, noise(d / 2, po / 5) * 3)
            r.rotateZ(-rotZ)
            if (axC) {
                r.rotateZ(-90)
            }
            r.rotateX(+90)


            if (bw) {
                r.fill(rand(0, 50))
            } else {
                r.push()
                r.colorMode(HSL, 360, 100, 100)
                let nc = r.color(180, 22, rand(15, 30))

                r.pop()
                r.fill(nc)
            }
            // r.circle(0, 0,rand(0.2,0.4))
            r.sphere(rand(0.2, 0.4) / 2)

            r.pop()
        }

    }
    r.pop()
}

function txline(lx1, lx2, lx3, ly1, ly2, ly3) {
    r.push()

    r.strokeWeight(0.5 * sw)
    for (let t = 0; t < len; t += 1) {
        r.stroke(rand(0, 50))
        // r.line(lx1,t,lx3,ly1,t,ly3)

        r.noFill()
        // r.stroke(0)
        // r.strokeWeight(0.5*sw)
        jLine(lx1, t, lx3, ly1, t, ly3, 0.6, 0.1)
    }
    r.pop()
}


// function jLine(x1,y1,z1,x2,y2,z2){
//     let dis=dist(x1,y1,z1,x2,y2,z2)
//     let ar=[x2-x1,y2-y1,z2-z1]
//     r.beginShape()
//     for(let t=0;t<dis+0.1;t+=2){//dik
//         r.vertex(minx+rand(-0.2,0.2),miny+rand(-0.2,0.2),z+t)
//     }
//     r.endShape()

// }



function jLine(x1, y1, z1, x2, y2, z2, dens, jiggle) {
    if(dbj){
        return
    }

    let dis = dist(x1, y1, z1, x2, y2, z2)
    let ar = [x2 - x1, y2 - y1, z2 - z1]
    r.noFill()
    // r.stroke(h.color(0,100,50+rand(-15,+15)))
    // r.fill(h.color(0,100,50+rand(-15,+15)))
    r.beginShape()
    for (let t = 0; t < dis + 0.1; t += dens) { //dik
        r.vertex(x1 + ar[0] / dis * t + random(-jiggle, jiggle), y1 + ar[1] / dis * t + random(-jiggle, jiggle), z1 + ar[2] / dis * t + random(-jiggle, jiggle))
    }
    r.vertex(x1 + ar[0], y1 + ar[1], z1 + ar[2])

    r.endShape()

}

// function rectuvmap(x,y,w,h){
//     r.beginShape()
//     r.vertex(x,y,0,x,y)
//     r.vertex(x+w,y,0,x+w*10,y)
//     r.vertex(x+w,y+h,0,x+w,y+h*10)
//     r.vertex(x,y+h,0,x,y+h)
//     r.endShape(CLOSE)
// }

function rectuvmap(x, y, w, h) {
    mul = 80
    r.beginShape()
    r.vertex(x, y, 0, 0, 0)
    r.vertex(x + w, y, 0, 0 + w * mul, 0)
    r.vertex(x + w, y + h, 0, 0 + w * mul, 0 + h * mul)
    r.vertex(x, y + h, 0, 0, 0 + h * mul)
    r.endShape(CLOSE)
}

function collidePointPoly(px, py, vertices) {
    var collision = false;

    // go through each of the vertices, plus the next vertex in the list
    var next = 0;
    for (var current = 0; current < vertices.length; current++) {

        // get next vertex in list if we've hit the end, wrap around to 0
        next = current + 1;
        if (next === vertices.length) next = 0;

        // get the PVectors at our current position this makes our if statement a little cleaner
        var vc = vertices[current]; // c for "current"
        var vn = vertices[next]; // n for "next"

        // compare position, flip 'collision' variable back and forth
        if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
            (px < (vn.x - vc.x) * (py - vc.y) / (vn.y - vc.y) + vc.x)) {
            collision = !collision;
        }
    }
    return collision;
}

function collideLinePoly(x1, y1, x2, y2, vertices) {

    // go through each of the vertices, plus the next vertex in the list
    intersectspoints = []
    var next = 0;
    for (var current = 0; current < vertices.length; current++) {

        // get next vertex in list if we've hit the end, wrap around to 0
        next = current + 1;
        if (next === vertices.length) next = 0;

        // get the PVectors at our current position extract X/Y coordinates from each
        var x3 = vertices[current].x;
        var y3 = vertices[current].y;
        var x4 = vertices[next].x;
        var y4 = vertices[next].y;

        // do a Line/Line comparison if true, return 'true' immediately and stop testing (faster)
        var hit = collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4);
        //   if (hit) {
        //     return true;
        //   }
    }
    // never got a hit
    // return false;
}

function collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
    var uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
    var uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

        var intersectionX = x1 + (uA * (x2 - x1));
        var intersectionY = y1 + (uA * (y2 - y1));

        //   }

        //   if(this._collideDebug){
        // this.ellipse(intersectionX,intersectionY,10,10);
        //   }
        // intersectspoints
        append(intersectspoints, [intersectionX, intersectionY])
        //   if(calcIntersection){
        //     intersection = {
        //       "x":intersectionX,
        //       "y":intersectionY
        //     }
        //     return intersection;
        //   }else{
        return true;
        //   }
    }
    // if(calcIntersection){
    //   intersection = {
    //     "x":false,
    //     "y":false
    //   }
    //   return intersection;
    // }
    return false;
}



function getCol() {

    // hm = rand(-50, 0)
    // if(det(0.5)){
    // hm = bias(50, 100, 8, 100, 1.4) - 100
    // }else{
    // hm = bias(50, 100, 8, 100, 1.4) - 250
    // }

    // clevels=rand(-cfark,cfark)//30

    clevels = bias(0, cfark * 2, 100, cfark * 2, 1.3) - cfark
    // if(makeCar){
    //     clevels =map(clevels,0,)//(bias(0, cfark*2, 100, 0, 1.3) -cfark)*2
    // }
    if (csab) {
        clevels = 0
    }
    // print(int(cmin),int(cmax))
    // print(int(cmin+clevels),int(cmax+clevels))

    if (!bw) { //col
        // hueStart = rand(20, 300)
        r.push()
        r.colorMode(HSL, 360, 100, 255)
        // bcol = r.color(rand(hueStart, hueStart + hueRrange), 15, cmin + clevels) //190 + hm
        // bcol2 = r.color(hue(bcol), saturation(bcol), cmax + clevels) //lightness(bcol) + shaderand
        // colmax = max([cmin + clevels, cmax + clevels])
        // bcol3 = r.color(hue(bcol2), saturation(bcol2), colmax + 10) //
        // roadc = r.color(hueStart, saturation(bcol), 220) //220

        if(suf){
            shuffleArray(pallet)
        }
        bcol=pallet[0]//renk1
        bcol2=pallet[1]//renk2
        bcol3=pallet[2]//renk3
        bcol4=pallet[3]//renk4
        bcol5=pallet[4]//renk5//renk5



        bcol = h.color(hue(bcol), saturation(bcol), lightness(bcol)/100*255 + clevels)
        bcol1 = h.color(hue(bcol), saturation(bcol), lightness(bcol)/100*255 + clevels)  //forroof
        bcol2 = h.color(hue(bcol2), saturation(bcol2), lightness(bcol2)/100*255 + clevels) 
        bcol3 = h.color(hue(bcol3), saturation(bcol3), lightness(bcol3)/100*255 + clevels) 
        roadc = h.color(hue(bcol4), saturation(bcol4), lightness(bcol4)/100*255)
        trCol = h.color(hue(bcol5), saturation(bcol5), lightness(bcol5)/100*255)


        r.pop()
    } else { //bw
        r.push()
        r.colorMode(HSL, 360, 100, 255)
        bcol = r.color(0, 0, cmin + clevels) //190 + hm
        bcol1 = r.color(0, 0, cmin + clevels)//forroof
        // bcol = r.color(rand(hueStart, hueStart + 30), 0, 190 + hm) //190 + hm
        bcol2 = r.color(0, 0, cmax + clevels) //lightness(bcol) + shaderand
        // bcol2 = r.color(hue(bcol), saturation(bcol), lightness(bcol) + shaderand) //lightness(bcol) + shaderand
        colmax = max([cmin + clevels, cmax + clevels])
        bcol3 = r.color(0, 0, colmax + 10) //
        // bcol3 = r.color(0, 100, 24 + 10) //
        roadc = r.color(hueStart, saturation(bcol), 220) //220
        r.pop()
    }
}

//herşeyin random olduğu mod
// bcol = r.color(rand(0,360), 20, rand(0,255)) //190 + hm
//         bcol2 = r.color(rand(0,360), saturation(bcol), rand(0,255)) //lightness(bcol) + shaderand
//         bcol3 = r.color(rand(0,360), saturation(bcol2), rand(0,255)) //
//         roadc = r.color(hueStart, saturation(bcol), 220) //220

function arrRem(arr,item){
    for( let i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === item) { 
    
            arr.splice(i, 1); 
        }
}
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(fxrand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;    
    }
}

function windowResized() {
    schance()
  }

  function schance(){
    screen = [windowWidth, windowHeight]
    Adcanvas = sort(screen, 0)
    // document.getElementById("defaultCanvas0").style.width = "auto"
        // document.getElementById("defaultCanvas0").style.height = "auto"
    if(asp=="3:4"){
        if(((windowWidth)/(windowHeight/4*3))<1){
            document.getElementById("defaultCanvas0").style.height = "auto"
            document.getElementById("defaultCanvas0").style.width = "100%"
            // print("1")
        }else{
            document.getElementById("defaultCanvas0").style.width = "auto"
            document.getElementById("defaultCanvas0").style.height = "100%"
            // print("2")
        }
    }else{
        if(((windowWidth/4*3)/(windowHeight))<1){
            document.getElementById("defaultCanvas0").style.height = "auto"
            document.getElementById("defaultCanvas0").style.width = "100%"
            // print("1")
        }else{
            document.getElementById("defaultCanvas0").style.width = "auto"
            document.getElementById("defaultCanvas0").style.height = "100%"
            // print("2")
        }
    //     document.getElementById("defaultCanvas0").style.width = Adcanvas[0]*4/3 + "px"//1
    //     document.getElementById("defaultCanvas0").style.height = Adcanvas[0] + "px"//0
    }
  }