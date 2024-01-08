import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='container my-20 grid grid-cols-2 '>
      <div className='grid-item '>
        <p className='extraBold32 mb-3'>About Dharti tech</p>
        <p className='normal16 text-foundation_gray_B200'>
          Lorem ipsum dolor sit amet consectetur. A venenatis eu pretium quam
          cursus. Consequat urna pellentesque sit proin vitae molestie at a.
          Nunc lacinia tellus molestie vulputate lacus ullamcorper in.
          Condimentum metus gravida mauris ultrices pretium varius. Amet
          lobortis duis donec nunc convallis. Mauris urna sed sed metus cras
          egestas accumsan egestas sed. Id dui quisque non vel faucibus massa
          tincidunt sit fermentum. A a rutrum aliquam egestas porta non. Varius
          ultricies commodo nulla semper diam amet vitae scelerisque. Morbi
          sagittis dolor mauris massa sed volutpat. Semper id magna nullam quis
          sapien.{' '}
        </p>
      </div>
      <div className='relative'>
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-1'
          src={
            'data:image/jpeg;base64,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'
          }
          style={{
            borderRadius: '20px',
            border: '0',
            objectFit: 'contain',
          }}
          className='border-nextColor absolute top-20 z-10 rounded-lg border-2'
        />
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-2'
          src={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGBgaGBgaHBgaGBgYGBoYGBocGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCw0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEQQAAIBAgMFBQUECAUCBwAAAAECAAMRBBIhBQYxQVEiYXGBkRMyQqGxUsHR8AcjJGJygrLhFBWSovEzQxY0Y3OTwtL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAnEQACAgEFAAIBBAMAAAAAAAAAAQIRIQMSMUFRBBNhFCJCoTKB8P/aAAwDAQACEQMRAD8Afg8PLVKcjwtOG2nIdJEVjwsflnWEUJAyxhWTmRtBQyZA6yI18nb+zrJX4wLHt2G8IrimhkyOrvS73yDhKjEbXxL31t3QBF1uuh6QyhjANGko6UY9FHKVYBMSlRwCb3nMPhXuDw6y1fEqI1MStxpKYSwI23yMx9O2TxELwWICYhQ3DSQbQb3D3iQY+oM/DlM4qUaYidSs9FxVXImZCDpPLN5lJcsRxlvgtruBlY9mP3nw2agrqCfAE/SS047JqyjzFmIw3vQ4CMw2CcMAUfXh2TLvC7vYl75aLadbL6XOs65Tj6S2vwp8tjeEJqJc4XdbEuVX2ZBY27RAA8bcJeH9HGIW1npG517Ti3f7usCaatAeOTHoJHXSx7pqsXufiEbLZG0vdWNvmAYM+7OIIN0Gnfx8NJty9DTZQ4OtY68IdTxSSUbu1/sfWMbYNYfAT4Xm3Q9Ntl4dfHp0g7Y0chJjsasP+2fSNTZlUmwRvSDdH021+CXHnpK+qGL5hLD/AAFQaZG9Iw0HHwN6GFSXpq/Bym/WTq8DqVFRrMbRyVlYmx0hAHDEARmIqZhK4U73JbwhaOMlucDA+Cz2TjWQaMReXVLed0Nj2hMilSwEe2KGe9vKZxs0Wbf/AMXpzUxTz+pidTpaKb6om3s3WHhUgprCVWMKNEfadCToEAxA8jeTtIGa8DGTB34wHGL2W8JYhJGuFztkva/OJJ0hkZTsEWIsROUMMz3st7TY/wCRUU983McXpU1OQCQep4VUbMy2yqq2DJcHhzhGH2M/hLPFbVJtaDJjnJveC5MNRoC2tSy5B3iDY2n2x4QvauuUk/EJHil7Y8JZcEf5Gm3dOG/w4VkXMCSSVFyb3BzeFhbuly2Pw6L8IH55TzwYspoDK3a20TlteScJSkUW1K2emrtzDA6ZfICTDeSjwE8Sw2Oa/GWlHFHTWMtGS7BcWev/AOfoNeFpXbU32p0xdmsOXUnoANTPNsTtMqCSdOnU8hKyjTNR81Qk6+QHQdJSMJVl4Fe26Sya/F/pAxFRv2dAg+24zN5KOyPnAG21jn97EMCegVR/tUSXD4IaADSH0tmE8orklwjojox7ZzZG1sVmAaqrDo63+Y1+c1VbE1UTOUDJzZdQPHoO+UNPZxUg2mk2BtDKcj8D6a8jNFRm6aoXUjtVxK+nvEh4gQjC7eTXQTO747LGHqhqelN7kAcFbiU8OY8+koEqWbQwPRokppnpabbpFb2EKGOoNYEL6CeWJW7J7UJpYzQanSL9cka4m12pszCVT2kW9+IAB9RHru9gxTtkXxub+sw77Ra/Ews7SfLlvAoyQW08WX77oUSpKuQTw1EA2zu7QoYbOHJq6cxZrnUBeQAvr3QSntN8trnSD43GmoljqY0XJPIJRVWAbK2NXxTFKAS6i7M7FVA5cATc+EFxmycXTqOr0XOTRnRWZALXBzAWtY3lxu3tFsO+ZTa4sRxBHHUGbzZ+8dJyyPpcXu3A34i0s506IqLas8YqO1zFNXtWnh/bPkRsubSwFrd0UH3fgb6/yadBCBwgqPJM0sTJwYmMgV51ngMNdpCRHO0aTFaGRwmBVapGoNiITUeV+IF7wSRRMBq4t812NxEat+B8pxsMQRrcSRMKOWkjsXI+98MiveS0T3R/sjaT0qOohoXcD7TXsr/EJzEL2x4Sbaidlf4hJmTtDwjrgRvJTYzLfhKLa5FtBNbjqC8Txmf23RGURo8iszGGPalsj8IBg6f6y2UyyUgXFtespIyIavadR0+p/t9ZocJg10t+TeUHxsfD6CaTB1QEzMQALamTnbpI6NGlbZeYSgALy2oU7gaTI4Pa7u+Skt+zcMe1exANl8CD69NSMTWIzftCq5vpmY6jS1g1ltwiLSfYZa0UzXGnpBKiWNxxma2btOuBmzCovM5jYeZvcecCTeDF1XZFSnStlPauWOa+UDW2tj6R4w7M9Rdmv2vS9rTKngRoejjVT6/ImYtcKSRJMDtfE58lWqxTgwpiizgH4gpQ3te8sMWaKZitY1AtgTktaoSL02awUsBcm3C1jxlXFs5pSXRXLgeIjaeG0nBtZLtITthMhsJIO1hlbD9kRzUeGsrqm21yrYSLG7ZPZyrMk/AtY5LilSFjOJTFjKfB7YYXBWSYDaLuStuczTs1Y5DbAA+MlGKUZSDK/adwjESldqmRWscvAGxtfxhcUxYt1g0lXEoSYpmWqVOsUO1GyeqIeceWkax144g7NH5oOTHI2kARrNaPEhqiOpvAFEdY6wLGVMqseghdY6yt2l7j+EVjoq6e0y3ASX/OB7pFjK7D5QgZfe6RxQ3a63k28jqKoPXHsb5dQI6ltG7Aajuldh06G0KQ3cXHnAw1gt8ebop7xAdp4lldbdJY4tf1a+IlVtn318I0eCfYFidouFOl++A4zGuVXSEYilccbQDFUQFHajpILbQzDYlhU4DhJbsbm/OC0UXP73KFIq2OsakJbYmD8VUm41bXKLdTLjDYDMqmoxc8gfcXwUaX7zc98dhMCpUEMzPa4XMQiItszZRbMTfQGOR7ECScrtI646aVNhlfAlGRhZVN6dxZQMwut7ciVC+LCHPu2qpYUsh07WYnUEHn3gcekK2bi0N0dQ4ItYgEeYMCxlOgXFOkrAX7VnfIo6Zc1vKKpSrDBKEXK2itxGCWmPYK189s6jiqX1J6FhdQP3ifhj6+xaj1M6rbMoDKTbMFuVseF+IseN4eKJS6UXp00JLZggZ7nllYZfORYzaOJCFPaBjwz5SDb+AG3zjRcm00M1FRaYFgN3TVqoaYVGzA5x2OHH3Rrw53k29lOnSWjQpvnYF2qLqAmihFC3suhbhxIvBcNWTOGrhXdgAXta5GgzW06QvbdSnUdcoVMgt2QFFjqNBoNb+sq5tJpkJaStOJlwO0ezI0pnK2kuUSmLknlIajoENuMTd+DbfWVbo2QaSV6DmxA4Qg119la2sdUxfYygWJ5wty8AlH0go4V7k34yfZ+HZX46SDDVyOze4k+BcmqLwVIDcaLHaafq2lbiNqZsMtKw4jXwlzthP1T+ExgYZR15x9ilV9MnGTSdE/sh9uKLsfZMUbIcHqaDWO5xgnQ2sJM44nUkhScVIAkdUaSOlpJnWcKQDWD1YDjRZGPdLJ6chqYfOMvXSK0FMw5INvhMJw7upJBDCa87roVA+c4N2UQg3MVxdcDqaMozByL9mT06TKQc1xebKlu3Scd8Hbd9FOhm2s32IBxAPsh4iAbWXtLccpc7Rw4VQAfiEtKOx0excX0EMY2TcqdnnGMpHxErcTS7Ateewvu3R+zK3au79EIbKBYGVUWhXNM8mor2xpLCnQOuk5QT9py8rzSJhRMzWDbNqKqZXuvHKwuLG3IjUaDzjENzLf/KXem7oLimMx7+RA8Bc+UzvtbNJShTbOqGpuik+i42a/asdDH7Mwz3ABQKWId3ZgqG/MDiPSVor/ABDjLnA4n4uTcfxi1gdvJbUsPTQWfHYRGsfsfYDDtM4+16WhWI2Spvlx1I2txCE6jS9nvqRAj7JRcqDfkRcQDH16NVSrqrC1gGRdOnaK3+ceG3w0oyrD/oyy1HrVnRgtw5Qst8rZWK5l9L3llh9lvUzsmqq9r+X9/nIwBTByi5OigcczaCwm92Xs04fDKjWz6s/8bakeWi/yym2zlnOsIxtDdyo50hSbmVCDcj5zYbLlwsKgiTmzzkblOEN2HpH4Pcwut83ynojrcHwg2y0CqQOph2oG5mRp7ij7Xyixe7KYdc5bXym8UiZLfrDu6IUvZWuRA4qgqTM1tLWm/hMGqG1+U3+KS9Jv4ZgSGynXS/CCJkGJUe3uiKR0kew7UU1Ifcz1DNOgRBJMVmFFmnUGk4qSQLMYiYxw74PtTFClTZzrbgOrHgJgsTjXdszuWuetgO4DlJzltCehuQeY9RHYbDM7qqi5/CebBz1+cKw+MqI2ZHdD1VmB17xJPVfgyPVqeFfLmym17eBBsYRR2YzkgtYCeXJvJi1WwxFS1z8V+PjC8HvnjENxVzdQ6Kw9QLzLWfZq8PR2wBpHU3HWV9WoLmZOtv8A4thYilY/uG/9UrxvVW10Q/y/3jrWjQKNNtTUcPiH1l9s9tB4CedVd5nYWZEPPS4mu3R2s+JLWp5EQAF81xm5KBbU217tOsfTkpOkLLg0jvw0lZtUOylVUsSNABcy1ZQDYnwueMkRB4Hpe06lBk3I87ofo+qhxVaqik6lMpOW/IuD9001DYNGmjO/6xgCxvcLoL2Cg/W8v2ToT5/jBHHEWJBVrrz6G3frHjCNiuTJMBQVEChVFxcgAAXPH8J5vvru6cO/tUH6pz/8bHgp7jyPl0v6Rg2ui63IFvMafdHYzCpVpvTqKGR1IYHp9x53gnBMMZNHiFOraWez8YENm90/WV+39i1cJUKG7JqUfqvf3jn/AHldTxfI+h/Cc0oHXGWDcDFJbRjbrbSCPVA5A38B85mFrW91yO7iJLSLHUtoNYsdPI71aVG53S2cKtX2rC6UjoeTVTrcfwjXxKzV7RHZMqNz6hRfZ2FvvPxHrrLLG0ij3TsnmvFT10PETr+rNHHKV5BdksJdKwtH4b2ZUHIoJGtlA8eEJ9gh4XHh/eI4tAsrcfiQiMe4yh3L2p7TOrHUMfST74molFiFuOZHTraYvc3EOtcBVPb04G0UPR6upkWLpB0IIkiYWpblHHB1LcR85gGB2lgyA6qL6G08/r7IrAMSjDXpPZxs989jaF7S2MTTbUe6eQgSDZ4fR2Q5ANjrFPYMBu5mpqS3Ed0UagWVoElWR049DrJDj8seqRhaTUjMEzW/L5aKL9p/oP7zFJ8pr/0gt/0Ry7Z/pmPWc+pyZEqySQqY9NOekkxh5bSLODpGqbx2TSIYYPGdM4yGNjGJcLReo6U0F3dgqjvPPwHHyns+ydnpQpLTQaKNTzZvic95Mwf6OdnZqj4huFMZE/jcdo+SkD+eeigzv+PCo7vSUn0J1B0IBEh93iezyYnVe4nmv0+k15wgHTu8p1omxwq9dDG8XU9xEiYBQF4fZ/8Azf6R+GXiOjBh4MOHqDGrFgsrN4NoPhULpSNTMwAUNlVGPNjqcp7hxPK8z42ttOqFZFpop1IVLsAe9yeHhNyUD5lbVSLEQDDKUJU65TbxU840WqysgdlO2zHr0ymJfMx1R8qhkb+UAMvUGecbV2OUqNTdcjqfAEcmU9DPaSg4Hh16f2lftXZS1UKOLjirfEjDgQT+TwPWS1YKbtYZbS1NuHlHix2cy63Pqv4wjC4Z3daaBmLMuawJsuYXY9ABfUzRYjYb+2XD6Z2PZOuUpxLnoAAbjutN7hMJTwtIJTW5AvrxZjxd7fnQAcJHSjKTpldZxirXYBj0GGwrulxUKFU4FjUYWUgHja+bwEr90trVKgKVg5e91dsza81N+H09Zbrg2ftubm99eABFjlHIaD0lhhMIFYETue2MWnlnEm2wvDJYfOTg8IxfrrO3kHkpZKHB0IB7jCqFBDqqgeUrEOt4VSr219fCJKPgUyxCxWnEcEXHAym3i3gTCqGcMbmwyjnJDk7J+sh2KS6Edxmf2RtgV2DAEc7GaOq3ZPhMApdnL+rTwikGBrdhfP6mKMTM7TiYyNWiDSJdEywhBBVaTo8wTJfpBft0R+4x+Y/CZZDwmk38Yl6R/cb5GZpNBp9/oJzzWWZD7668fn6RxYd/zjLztzJjDs4/IM6HHX5xoM53iCkY7mvznCY3SRsIySAetbk0cmDp9XLue+7tY/6QvpNEJS7qf+Uw/wD7SmXF9PGenBVFIhJ5HA8Zwjp6Tq6CcZe6VQrOMAwKnyPMGQ4CoTfN7wDK3ijWHqGv5yR/QwenW/aMvJ6bt/MjIp+RHpHXFALDDc/GQ4xLMr/yn7o/DNofGPxFPMhHO2niOEXiQehiN+e7mJIdIPRe6yR27ImayYGxKAsrqi5wGVXsLgMQWA7uys4mG5nW51MKZtUt0+s66284bpAqzqKBwiVfrceE6sQMQIyibi3QkehIid/w842gdXH7/wBQD98ExlUgrb4iPUA3+ojJWwN4Ck6chp4nmfz3yZJGnCPEEgoh23tKpQw71KaZygzFL2OX4mHgNbdxnlG2N5auKsXAUA3AH4meyIZ5Xvluu2HZ61JR/hyQeI/VsxsVy8ct7WtwvblISRWNFtu/jvZhW4ggXnoaYjOlx0nlez2vTXwnpGwxegvhFXAHyY87yrSJpnipYH1J++KZTeYAYqtb7X3Ccg3yBtiabNOB9ZCHiR9YhULDyZX0lez6whXmMZXfOpeqg+ynzZm/AShXhLTexr17dEUfU/fKpD+M558mXI6+nGNvERGgxEMPzxFtOMjvrxi8pqMxMeU43CdJkbtGSFPa93ky4WgP/Sp/0AmWLsOJ0A+vcOcr93nzYbDnrRpn/YJZuB5/QT1IJUiEiBy7aKQg62DP5A6L53kNTZq5SWLudDdnY/K9h5CGgRwYCU3NcC0A08ClrpmS4+F2Fj1y3sfMSs2fjnNUpUA9pTcrmGgdHBKuByJyi46iXVQgcOB5dD1Eokf9sfs/9pDfqWZwPQKf9UpF3dis0mHPHxkt4PSaSMZKSyOiNey5HI6jz4/OOYaEcx/yPw84yvwDc1N/Ln+e6Sq3AzAB0bUdLafIj6wpuEDU5XZO4sPC4++FGFmQlMdI+cePxgoJCHs7DuB+77oJWQPkP2Hv8mX/AO0JrqMwPPQffAsaiopYsQAcxvr1Nr8h+EpFIRlkhj1Mr8HWLorNpdQbDhqIcp6RJKh0yYGDbV2WmJpPSc3Vhy0ZSDcMp6gjwk4j1k2gpnnb7OfDH2T6291uAZeRHTvHKbbZWICYa55L90dtvArWp20zrqhPUcRfoeHp0md3k2wKGGyWKuRYKdPMdRIuND8mHx2MDVHbqxMUzpxTGKCg0b5WkimQiSDhJlBwa5hN4LThCwBMXvI37Q3gv9IgHKG7z6Yhu8L/AEiABtB9OMhJAXIiek4TEdZxjFQRAx3ORtzihox1pE8e0Y5jIVnuu76ZMNRHSlTHoiww/wDMC2JUzYagRzp0z/sEMUT0o8EHyPAPXSMLAR4PM+QkVSqBey5j0H4x0AHepf8A4lRimy11tzQfJj+MtRTqsb9hR9kglvMg2lLtjD1BURwjZbEGwvZr35crffLQqxJLBd4SpD1Mz+Gcg8GHkZb06mkWaNFk7mxv6zlE27Pp4TjMJxGuB1H5MToYZjk7aOOQdD/C1j9UHrJ1a4irJdT4f3kWGe6w/wATdkx4RwM4Y0Np5wIILiqlmXx+6ZbfLaTBkw9JS7uyl1GtkuCxN+7l3y+xz6qf3hPM96MQTi6jcCpUeFlGkMpbUmBLc6PVMJUFhqL+sOQzF7p7bR1yEBXUXK9w+Je76S1xG8iBglMB+rE2Udw6mT1NSCVt4Hhpzk6SNGs4zHx87CVWG26hNmBXv4r6w6m6VOD37lMWOpCXDDLTnHlD3qsNMyDuNzf5iV+2NmpiabUnAAbgwDdluTKCNCO46i4Ms6eGRTooB5nn5niZJVK5TnsF53IAHfflHbXAqTPH6u5eKUkeyDW+JXSx7xmIPrFPSP8AO8Cun+JpadXv87xRP2ejfuMRQqiTqwOkrqDQtDOUsFILSRXkVIyfiJgmN3o/6/ii/hKvlLXewWqof3B8maVatcCRkL2cI9OM4xM5HAxRhrCNE7e8aYQHWjWEV41mhSAew7j4rPgqX7oKH+Rio+WX1mhH/PhPPP0XY7SrRJ4EVFHcey30T1noLGwJJsLankANSZ36buKIyWTlZSRxsD04kdAeXj0j6KWFrfnpG0mzDNyOo7l6eMe55dZZ+CjgfT6zrH5W1nQImGkFGscjG4EmKC3at5gSHDIQNfDy6zFfpC2yzfsVA9pgDWcfCh4ID1bn3eMnOSirY8ISnLahu3/0h4akxShTbEMNCyNlpg9A1jm8hbvhewN66eI4g03+wzAg89GsJhcNsrJYKv8AeE/4Ujl3Tl/V0+Dt/Q2uT1OnjUI99f8AUIHSxtNXK517u0J5qcKeJGk41AjlGXzV5/YH8B+/0eqPjUFhmGvfG1sQqqWLAAX1v0nlRqsNBcec41eo2mdiOlzGXy4+CP4cvTZ7Q2yinU6DtWAuT3eMwb0nquzvoXcsRz7Rvb7oYlFmPP7vWHYfCHn6SWt8vdwi2n8NRzJguFwiju+p8ZfbOw9NO0xF+V4PRRQbW1lvgcMnvOoOmgOvnOGU3J5OvbGMaRDiCTqp19Qe4x2AxaOSvuOOK3tfvHUTlWkUbMg0+zyP4QXEYeniAbdhx32YHqCIf+sTou8NtpkYo7ZxlJU6BrrrkBOlzyvMmKtbG1M9YnIDdKVzkQA6afE2nvHXw4Sux+IJth73dWAzA8Ra/rL3DOqU7k+6Dc8LczeX+2W3ayf0wT3InbaOXs5uGkUyoKv22Fy2vHrqB5DTyikv9lKXhNh6stMO8UU62ecGK0fmiimYTKb1++n8J+R/vKkcIopKXIvYzNEDFFFYxGzRrMIooyFG5hGs4iijIDLnczH+yxlI8nb2bd4fQf7sp8p7U9POpB4Hj3gEafSKKdmhwTmORct7SQLe5iilhB6mdYaCdimAUO9O8Rw9IZADUqFlp34DLozt4dOcyGyqIUsXJZySzOdWZm1JvFFPO+ZJ3tPS+JFbdxaKV0sNY1wpOg48oopxHaRmiv56QatRUjXlFFMMOw+zFaxvpD03fQG94oorbFbJ12cijhGVcMvITkUwBtPDLa8mqUBlGU2brFFN2YE9tUXMWs6+hH4yA0EqJnQkcTfUEGKKUjyKzKYejbFKTexe4JILHlraWm+OJAppTHxtdrfZXUiKKUl/mhP4Mol9j1eciilyFn//2Q=='
          }
          style={{
            borderRadius: '20px',
            objectFit: 'contain',
            border: '0',
          }}
          className='border-nextColor absolute  right-20 rounded-lg border-2'
        />
      </div>
    </div>
  );
};

export default About;
